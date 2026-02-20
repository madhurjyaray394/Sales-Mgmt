"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { LocalStorageManager } from "@/lib/data/LocalStorageManager";
import { Product, Transaction, DashboardData } from "@/lib/data/types";

type DataMode = "api" | "guest";

interface DataContextType {
    mode: DataMode;
    isGuest: boolean;
    loginAsGuest: () => void;
    logout: () => Promise<void>;

    // Products
    fetchProducts: (search?: string) => Promise<Product[]>;
    saveProduct: (product: Partial<Product>) => Promise<Product>;
    deleteProduct: (id: string) => Promise<void>;

    // Transactions
    fetchTransactions: (page?: number, from?: string, to?: string) => Promise<{ transactions: Transaction[], total: number }>;
    createTransaction: (data: { paymentMethod: "CASH" | "UPI"; items: { productId: string; quantity: number }[] }) => Promise<Transaction>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTransaction: (id: string) => Promise<any>;
    fetchDashboardStats: () => Promise<DashboardData>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<DataMode>("api");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isGuest = localStorage.getItem("sm_guest_session") === "true";
        if (isGuest) {
            setMode("guest");
        }
    }, []);

    const loginAsGuest = useCallback(() => {
        localStorage.setItem("sm_guest_session", "true");
        setMode("guest");
    }, []);

    const logout = useCallback(async () => {
        if (mode === "guest") {
            localStorage.removeItem("sm_guest_session");
            setMode("api");
        } else {
            await fetch("/api/auth/logout", { method: "POST" });
        }
        window.location.href = "/login";
    }, [mode]);

    // --- Data Methods ---

    const fetchProducts = useCallback(async (search?: string) => {
        if (mode === "guest") {
            // Simulate network delay for realism
            await new Promise(r => setTimeout(r, 300));
            return LocalStorageManager.getProducts(search);
        } else {
            const url = search ? `/api/products?search=${encodeURIComponent(search)}` : "/api/products";
            const res = await fetch(url);
            return await res.json();
        }
    }, [mode]);

    const saveProduct = useCallback(async (product: any) => {
        if (mode === "guest") {
            await new Promise(r => setTimeout(r, 400));
            return LocalStorageManager.saveProduct(product);
        } else {
            const url = product.id ? `/api/products/${product.id}` : "/api/products";
            const method = product.id ? "PUT" : "POST";
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });
            if (!res.ok) throw new Error("Failed to save product");
            return await res.json();
        }
    }, [mode]);

    const deleteProduct = useCallback(async (id: string) => {
        if (mode === "guest") {
            await new Promise(r => setTimeout(r, 300));
            LocalStorageManager.deleteProduct(id);
        } else {
            await fetch(`/api/products/${id}`, { method: "DELETE" });
        }
    }, [mode]);

    const fetchTransactions = useCallback(async (page = 1, from?: string, to?: string) => {
        if (mode === "guest") {
            await new Promise(r => setTimeout(r, 300));
            return LocalStorageManager.getTransactions(page, 20, from, to);
        } else {
            let url = `/api/transactions?page=${page}`;
            if (from) url += `&from=${from}`;
            if (to) url += `&to=${to}`;
            const res = await fetch(url);
            return await res.json();
        }
    }, [mode]);

    const createTransaction = useCallback(async (data: any) => {
        if (mode === "guest") {
            await new Promise(r => setTimeout(r, 500));
            return LocalStorageManager.createTransaction(data);
        } else {
            const res = await fetch("/api/transactions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Failed to create transaction");
            return await res.json();
        }
    }, [mode]);

    const getTransaction = useCallback(async (id: string) => {
        if (mode === "guest") {
            const t = LocalStorageManager.getTransaction(id);
            return t || null;
        } else {
            // The API doesn't have a single transaction endpoint used in the frontend yet, 
            // but the Sales page has a list. 
            // If we needed to fetch one, we would add an endpoint.
            // For now, the existing frontend passes the full object from the list to the detailed view.
            // But if we reload or direct link, we might need this.
            // Let's implement it if the API exists, otherwise return null.
            // Based on research, the detail modal uses state passed from the list, so this might not be strictly needed yet.
            return null;
        }
    }, [mode]);

    const fetchDashboardStats = useCallback(async () => {
        if (mode === "guest") {
            await new Promise(r => setTimeout(r, 300));
            return LocalStorageManager.getDashboardStats();
        } else {
            const res = await fetch("/api/dashboard");
            return await res.json();
        }
    }, [mode]);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <DataContext.Provider value={{
            mode,
            isGuest: mode === "guest",
            loginAsGuest,
            logout,
            fetchProducts,
            saveProduct,
            deleteProduct,
            fetchTransactions,
            createTransaction,
            getTransaction,
            fetchDashboardStats
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
