export interface Product {
    id: string;
    name: string;
    sellingPrice: number;
    costPrice: number;
    stockQuantity: number;
    trackStock: boolean;
    createdAt?: string; // ISO string
    updatedAt?: string; // ISO string
}

export interface TransactionItem {
    productId: string;
    quantity: number;
    priceAtSale: number;
    total: number;
    product: { name: string; costPrice?: number; sellingPrice?: number }; // Extended for flexibility
}

export interface Transaction {
    id: string;
    totalAmount: number;
    paymentMethod: "CASH" | "UPI";
    createdAt: string;
    items: TransactionItem[];
}

export interface DashboardData {
    today: {
        total: number;
        transactions: number;
        cash: number;
        upi: number;
        profit: number;
    };
    chartData: { date: string; sales: number }[];
    topProducts: { name: string; quantity: number; revenue: number }[];
    lowStock: { id: string; name: string; stockQuantity: number }[];
}

export interface SalesSummary {
    totalSales: number;
    totalTransactions: number;
    recentTransactions: Transaction[];
}
