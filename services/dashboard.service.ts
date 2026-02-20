import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

export const DashboardService = {
    async getDashboardData() {
        const now = new Date();
        // Start of today (00:00:00)
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        // End of today (23:59:59)
        const endOfDay = new Date(startOfDay.getTime() + 86400000 - 1);

        // 7 days ago
        const sevenDaysAgo = new Date(startOfDay);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

        // 1. Get Today's Transactions
        const { data: todayTxns, error: todayError } = await supabase
            .from('Transaction')
            .select('*, items:TransactionItem(*, product:Product(costPrice))')
            .gte('createdAt', startOfDay.toISOString())
            .lte('createdAt', endOfDay.toISOString());

        if (todayError) throw todayError;

        // 2. Get 7-day Transactions for Chart
        const { data: sevenDayTxns, error: sevenDayError } = await supabase
            .from('Transaction')
            .select('totalAmount, createdAt')
            .gte('createdAt', sevenDaysAgo.toISOString());

        if (sevenDayError) throw sevenDayError;

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
                start_date: startOfDay.toISOString(),
                end_date: endOfDay.toISOString(),
                limit_count: 5
            });

        if (topInfoError) {
            console.error("RPC Error (get_top_products):", topInfoError);
            // Fallback or empty if RPC fails/not exists
        }

        // --- Process Data ---

        // Today Stats
        const todayTotal = todayTxns?.reduce((sum, t) => sum + t.totalAmount, 0) || 0;
        const todayCash = todayTxns?.filter(t => t.paymentMethod === 'CASH').reduce((sum, t) => sum + t.totalAmount, 0) || 0;
        const todayUPI = todayTxns?.filter(t => t.paymentMethod === 'UPI').reduce((sum, t) => sum + t.totalAmount, 0) || 0;

        // Profit Calculation
        let profitEstimate = 0;
        if (todayTxns) {
            for (const txn of todayTxns) {
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
        for (let i = 0; i < 7; i++) {
            const d = new Date(sevenDaysAgo);
            d.setDate(d.getDate() + i);
            const key = d.toISOString().slice(0, 10);
            dayMap[key] = {
                date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
                sales: 0,
            };
        }

        if (sevenDayTxns) {
            for (const t of sevenDayTxns) {
                const key = new Date(t.createdAt).toISOString().slice(0, 10);
                if (dayMap[key]) dayMap[key].sales += t.totalAmount;
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
                transactions: todayTxns?.length || 0,
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
