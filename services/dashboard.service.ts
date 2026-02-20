import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

export const DashboardService = {
    async getDashboardData(range: "daily" | "weekly" | "monthly" | "yearly" = "daily") {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfDay = new Date(startOfDay.getTime() + 86400000 - 1);

        let startDate = new Date(startOfDay);
        let chartPoints = 7;
        let chartInterval = "day"; // "day" or "month"

        switch (range) {
            case "weekly":
                startDate.setDate(startDate.getDate() - 6);
                chartPoints = 7;
                break;
            case "monthly":
                startDate.setDate(startDate.getDate() - 29);
                chartPoints = 30;
                break;
            case "yearly":
                startDate.setMonth(startDate.getMonth() - 11);
                startDate.setDate(1); // Start of that month
                chartPoints = 12;
                chartInterval = "month";
                break;
            case "daily":
            default:
                startDate = new Date(startOfDay); // Only today's txns for totals
                chartPoints = 7; // Even for 'daily' view, chart shows last 7 days usually, or just 1 day?
                // Let's make daily chart show last 7 days still, or 24 hours? 
                // The requirement is "weekly, monthly, yearly view of the dashboard". 
                // We'll keep daily chart showing 7 days for context, but totals are today.
                startDate = new Date(startOfDay);
                break;
        }

        // 1. Get Transactions for Totals (based on range)
        const { data: rangeTxns, error: rangeError } = await supabase
            .from('Transaction')
            .select('*, items:TransactionItem(*, product:Product(costPrice))')
            .gte('createdAt', startDate.toISOString())
            .lte('createdAt', endOfDay.toISOString());

        if (rangeError) throw rangeError;

        // 2. Get Transactions for Chart
        // For daily/weekly, chart shows last 7 days. For monthly, 30. For yearly, 12 months.
        let chartStartDate = new Date(startDate);
        if (range === "daily") {
            chartStartDate = new Date(startOfDay);
            chartStartDate.setDate(chartStartDate.getDate() - 6); // default 7-day chart for daily view
        }

        const { data: chartTxns, error: chartError } = await supabase
            .from('Transaction')
            .select('totalAmount, createdAt')
            .gte('createdAt', chartStartDate.toISOString());

        if (chartError) throw chartError;

        // 3. Get Low Stock Products
        const { data: lowStockProducts, error: stockError } = await supabase
            .from('Product')
            .select('id, name, stockQuantity')
            .lt('stockQuantity', 5)
            .eq('trackStock', true)
            .order('stockQuantity', { ascending: true })
            .limit(10);

        if (stockError) throw stockError;

        // 4. Get Top Products (using RPC)
        const { data: topProducts, error: topInfoError } = await supabase
            .rpc('get_top_products', {
                start_date: startDate.toISOString(),
                end_date: endOfDay.toISOString(),
                limit_count: 5
            });

        if (topInfoError) {
            console.error("RPC Error (get_top_products):", topInfoError);
            // Fallback or empty if RPC fails/not exists
        }

        // --- Process Data ---

        // Range Stats (Totals)
        const todayTotal = rangeTxns?.reduce((sum, t) => sum + t.totalAmount, 0) || 0;
        const todayCash = rangeTxns?.filter(t => t.paymentMethod === 'CASH').reduce((sum, t) => sum + t.totalAmount, 0) || 0;
        const todayUPI = rangeTxns?.filter(t => t.paymentMethod === 'UPI').reduce((sum, t) => sum + t.totalAmount, 0) || 0;

        // Profit Calculation
        let profitEstimate = 0;
        if (rangeTxns) {
            for (const txn of rangeTxns) {
                if (!txn.items) continue;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (const item of (txn.items as any[])) {
                    // item.product might be an array or object depending on join, usually object
                    const cost = item.product?.costPrice || 0;
                    // Profit = (Selling Price * Qty) - (Cost Price * Qty)
                    // We have item.total which is (Selling * Qty)
                    profitEstimate += (item.total - (cost * item.quantity));
                }
            }
        }

        // Chart Data
        const dayMap: Record<string, { date: string; sales: number }> = {};

        if (chartInterval === "day") {
            for (let i = 0; i < chartPoints; i++) {
                const d = new Date(chartStartDate);
                d.setDate(d.getDate() + i);
                const key = d.toISOString().slice(0, 10);
                dayMap[key] = {
                    date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
                    sales: 0,
                };
            }
        } else {
            // Month interval
            for (let i = 0; i < chartPoints; i++) {
                const d = new Date(chartStartDate.getFullYear(), chartStartDate.getMonth() + i, 1);
                const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
                dayMap[key] = {
                    date: d.toLocaleDateString("en-IN", { month: "short", year: "2-digit" }),
                    sales: 0,
                };
            }
        }

        if (chartTxns) {
            for (const t of chartTxns) {
                const dateObj = new Date(t.createdAt);
                if (chartInterval === "day") {
                    const key = dateObj.toISOString().slice(0, 10);
                    if (dayMap[key]) dayMap[key].sales += t.totalAmount;
                } else {
                    const key = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
                    if (dayMap[key]) dayMap[key].sales += t.totalAmount;
                }
            }
        }
        const chartData = Object.values(dayMap);

        // Format Top Products
        // RPC returns: product_name, total_quantity, total_revenue
        const formattedTopProducts = (topProducts || []).map((p: any) => ({
            name: p.product_name,
            quantity: p.total_quantity,
            revenue: p.total_revenue
        }));

        return {
            today: {
                total: todayTotal,
                transactions: rangeTxns?.length || 0,
                cash: todayCash,
                upi: todayUPI,
                profit: Math.max(0, profitEstimate),
            },
            chartData,
            topProducts: formattedTopProducts,
            lowStock: lowStockProducts as Product[],
        };
    }
};
