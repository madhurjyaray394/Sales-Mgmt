export interface User {
    id: string;
    email: string;
    createdAt: string;
}

export interface Product {
    id: string;
    name: string;
    sellingPrice: number;
    costPrice: number;
    stockQuantity: number;
    trackStock: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Transaction {
    id: string;
    totalAmount: number;
    paymentMethod: 'CASH' | 'UPI';
    createdAt: string;
    items?: TransactionItem[];
}

export interface TransactionItem {
    id: string;
    transactionId: string;
    productId: string;
    quantity: number;
    priceAtSale: number;
    total: number;
    product?: Product;
}
