import { Product, Transaction, DashboardData, TransactionItem } from "./types";
import { MOCK_PRODUCTS, MOCK_TRANSACTIONS } from "./mockData";

const KEYS = {
    PRODUCTS: "sm_products",
    TRANSACTIONS: "sm_transactions",
    GUEST_SESSION: "sm_guest_session",
};

export class LocalStorageManager {
    // --- Products ---

    static getProducts(search?: string): Product[] {
        if (typeof window === "undefined") return [];

        let json = localStorage.getItem(KEYS.PRODUCTS);
        if (!json || json === "[]") {
            json = JSON.stringify(MOCK_PRODUCTS);
            localStorage.setItem(KEYS.PRODUCTS, json);
        }

        const products: Product[] = JSON.parse(json);

        if (search) {
            const q = search.toLowerCase();
            return products.filter((p) => p.name.toLowerCase().includes(q));
        }

        // Sort by newest first
        return products.sort((a, b) =>
            (new Date(b.createdAt || 0).getTime()) - (new Date(a.createdAt || 0).getTime())
        );
    }

    static getProduct(id: string): Product | undefined {
        const products = this.getProducts();
        return products.find((p) => p.id === id);
    }

    static saveProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt"> & { id?: string }): Product {
        const products = this.getProducts();
        const now = new Date().toISOString();

        if (product.id) {
            // Update
            const index = products.findIndex((p) => p.id === product.id);
            if (index !== -1) {
                const updated = { ...products[index], ...product, updatedAt: now };
                products[index] = updated;
                localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products));
                return updated;
            }
        }

        // Create
        const newProduct: Product = {
            ...product,
            id: crypto.randomUUID(),
            createdAt: now,
            updatedAt: now,
            costPrice: product.costPrice || 0,
            stockQuantity: product.stockQuantity || 0,
            trackStock: product.trackStock ?? true,
        };
        products.unshift(newProduct);
        localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products));
        return newProduct;
    }

    static deleteProduct(id: string): void {
        const products = this.getProducts().filter((p) => p.id !== id);
        localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products));
    }

    // --- Transactions ---

    static getTransactions(page = 1, pageSize = 20, from?: string, to?: string): { transactions: Transaction[], total: number } {
        if (typeof window === "undefined") return { transactions: [], total: 0 };

        let json = localStorage.getItem(KEYS.TRANSACTIONS);
        if (!json || json === "[]") {
            json = JSON.stringify(MOCK_TRANSACTIONS);
            localStorage.setItem(KEYS.TRANSACTIONS, json);
        }

        let transactions: Transaction[] = JSON.parse(json);

        // Date Filters
        if (from) {
            const fromDate = new Date(from).getTime();
            transactions = transactions.filter(t => new Date(t.createdAt).getTime() >= fromDate);
        }
        if (to) {
            const toDate = new Date(to);
            toDate.setHours(23, 59, 59, 999);
            transactions = transactions.filter(t => new Date(t.createdAt).getTime() <= toDate.getTime());
        }

        // Sort by newest first
        transactions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        const total = transactions.length;
        const start = (page - 1) * pageSize;
        const paged = transactions.slice(start, start + pageSize);

        return { transactions: paged, total };
    }

    static createTransaction(data: { paymentMethod: "CASH" | "UPI"; items: { productId: string; quantity: number }[] }): Transaction {
        const allProducts = this.getProducts();
        const transactionId = crypto.randomUUID();
        const now = new Date().toISOString();

        let totalAmount = 0;
        const transactionItems: TransactionItem[] = [];

        // Process items and update stock
        const updatedProducts = [...allProducts];

        for (const item of data.items) {
            const productIndex = updatedProducts.findIndex(p => p.id === item.productId);
            if (productIndex === -1) continue;

            const product = updatedProducts[productIndex];
            const price = product.sellingPrice;
            const itemTotal = price * item.quantity;
            totalAmount += itemTotal;

            // Reduce stock
            if (product.trackStock) {
                updatedProducts[productIndex] = {
                    ...product,
                    stockQuantity: Math.max(0, product.stockQuantity - item.quantity),
                    updatedAt: now,
                };
            }

            transactionItems.push({
                productId: item.productId,
                quantity: item.quantity,
                priceAtSale: price,
                total: itemTotal,
                product: { name: product.name, costPrice: product.costPrice, sellingPrice: product.sellingPrice }
            });
        }

        // Save updated stock
        localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(updatedProducts));

        // Save Transaction
        const newTransaction: Transaction = {
            id: transactionId,
            totalAmount,
            paymentMethod: data.paymentMethod,
            createdAt: now,
            items: transactionItems as TransactionItem[],
        };

        const { transactions: allTransactions } = this.getTransactions(1, 10000); // Get all to append
        allTransactions.unshift(newTransaction);
        localStorage.setItem(KEYS.TRANSACTIONS, JSON.stringify(allTransactions));

        return newTransaction;
    }

    static getTransaction(id: string): Transaction | undefined {
        const { transactions } = this.getTransactions(1, 10000);
        return transactions.find(t => t.id === id);
    }

    // --- Session ---

    static isGuest(): boolean {
        if (typeof window === "undefined") return false;
        return localStorage.getItem(KEYS.GUEST_SESSION) === "true";
    }

    static getDashboardStats(): DashboardData {
        let txJson = localStorage.getItem(KEYS.TRANSACTIONS);
        if (!txJson || txJson === "[]") {
            txJson = JSON.stringify(MOCK_TRANSACTIONS);
            localStorage.setItem(KEYS.TRANSACTIONS, txJson);
        }
        const transactions: Transaction[] = JSON.parse(txJson);
        const products = this.getProducts();

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const endOfDay = startOfDay + 86400000;

        const sevenDaysAgo = startOfDay - 6 * 86400000;

        const todayTxns = transactions.filter(t => {
            const time = new Date(t.createdAt).getTime();
            return time >= startOfDay && time < endOfDay;
        });

        const todayTotal = todayTxns.reduce((s, t) => s + t.totalAmount, 0);
        const todayCash = todayTxns.filter(t => t.paymentMethod === "CASH").reduce((s, t) => s + t.totalAmount, 0);
        const todayUPI = todayTxns.filter(t => t.paymentMethod === "UPI").reduce((s, t) => s + t.totalAmount, 0);

        // Estimate profit: (selling - cost) * qty
        let profit = 0;
        for (const t of todayTxns) {
            for (const item of t.items) {
                // Find product to get cost price
                const p = products.find(p => p.id === item.productId);
                const cost = p?.costPrice || 0;
                profit += (item.priceAtSale - cost) * item.quantity;
            }
        }

        // 7-day chart
        const dayMap: Record<string, { date: string; sales: number }> = {};
        for (let i = 0; i < 7; i++) {
            const d = new Date(sevenDaysAgo + i * 86400000);
            const key = d.toISOString().slice(0, 10);
            dayMap[key] = {
                date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
                sales: 0,
            };
        }

        for (const t of transactions) {
            const time = new Date(t.createdAt).getTime();
            if (time >= sevenDaysAgo) {
                const key = new Date(t.createdAt).toISOString().slice(0, 10);
                if (dayMap[key]) dayMap[key].sales += t.totalAmount;
            }
        }
        const chartData = Object.values(dayMap);

        // Top products
        const salesMap = new Map<string, { qty: number; rev: number; name: string }>();
        for (const t of todayTxns) {
            for (const item of t.items) {
                const existing = salesMap.get(item.productId) || { qty: 0, rev: 0, name: item.product.name };
                existing.qty += item.quantity;
                existing.rev += item.total;
                salesMap.set(item.productId, existing);
            }
        }
        const topProducts = Array.from(salesMap.values())
            .sort((a, b) => b.qty - a.qty)
            .slice(0, 5)
            .map(x => ({ name: x.name, quantity: x.qty, revenue: x.rev }));

        // Low stock
        const lowStock = products
            .filter(p => p.trackStock && p.stockQuantity < 5)
            .sort((a, b) => a.stockQuantity - b.stockQuantity)
            .slice(0, 10)
            .map(p => ({ id: p.id, name: p.name, stockQuantity: p.stockQuantity }));

        return {
            today: {
                total: todayTotal,
                transactions: todayTxns.length,
                cash: todayCash,
                upi: todayUPI,
                profit
            },
            chartData,
            topProducts,
            lowStock
        };
    }
}
