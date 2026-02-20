"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useData } from "@/contexts/DataContext";
import { Product, Transaction } from "@/lib/data/types";
import { Search, X, CheckCircle, FileText, Plus } from "lucide-react";

interface CartItem {
    product: Product;
    quantity: number;
}

export default function BillingPage() {
    const { fetchProducts, createTransaction, isGuest } = useData();
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [paymentMethod, setPaymentMethod] = useState<"CASH" | "UPI">("CASH");
    const [loading, setLoading] = useState(false);
    const [billId, setBillId] = useState<string | null>(null);
    const [createdTransaction, setCreatedTransaction] = useState<Transaction | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const searchProducts = useCallback((q: string) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (!q.trim()) { setSuggestions([]); setShowSuggestions(false); return; }
        debounceRef.current = setTimeout(async () => {
            const data = await fetchProducts(q);
            setSuggestions(data);
            setShowSuggestions(true);
        }, 200);
    }, [fetchProducts]);

    useEffect(() => { searchProducts(search); }, [search, searchProducts]);

    function addToCart(product: Product) {
        setCart((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
        setSearch("");
        setSuggestions([]);
        setShowSuggestions(false);
        searchRef.current?.focus();
    }

    function updateQty(id: string, qty: number) {
        if (qty < 1) return;
        setCart((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i)));
    }

    function removeItem(id: string) {
        setCart((prev) => prev.filter((i) => i.product.id !== id));
    }

    const grandTotal = cart.reduce((s, i) => s + i.product.sellingPrice * i.quantity, 0);

    async function generateBill() {
        if (cart.length === 0) return;
        setLoading(true);
        try {
            const txn = await createTransaction({
                paymentMethod,
                items: cart.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
            });
            setBillId(txn.id);
            setCreatedTransaction(txn);
            setCart([]);
        } catch {
            alert("Error generating bill. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function downloadPDF() {
        if (isGuest && createdTransaction) {
            const { generateInvoicePDF } = await import("@/lib/pdf");
            const pdfBytes = await generateInvoicePDF({
                ...createdTransaction,
                createdAt: new Date(createdTransaction.createdAt),
                items: createdTransaction.items.map((i) => ({
                    name: i.product.name,
                    quantity: i.quantity,
                    priceAtSale: i.priceAtSale,
                    total: i.total,
                })),
            });
            const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            window.open(url, "_blank");
        } else if (billId) {
            window.open(`/api/invoice/${billId}`, "_blank");
        }
    }

    function newBill() {
        setBillId(null);
        setCreatedTransaction(null);
        setCart([]);
        searchRef.current?.focus();
    }

    if (billId) {
        return (
            <div style={{ maxWidth: 440, margin: "80px auto", textAlign: "center" }}>
                <div className="card" style={{ padding: 32 }}>
                    <div style={{ marginBottom: 12, color: "#22C55E" }}>
                        <CheckCircle size={40} strokeWidth={1.5} />
                    </div>
                    <h2 style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
                        Bill Generated
                    </h2>
                    <p style={{ color: "#9CA3AF", marginBottom: 24, fontSize: 13 }}>
                        #{billId.slice(-8).toUpperCase()}
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                        <button className="btn btn-primary" onClick={downloadPDF}>
                            <FileText size={15} strokeWidth={1.5} />
                            Download PDF
                        </button>
                        <button className="btn btn-secondary" onClick={newBill}>
                            <Plus size={15} strokeWidth={1.5} />
                            New Bill
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, maxHeight: "calc(100vh - 48px)", overflow: "hidden" }}>
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, overflow: "auto" }}>
                <h1 className="page-title">New Bill</h1>

                {/* Search */}
                <div style={{ position: "relative" }}>
                    <label className="label">Search Product</label>
                    <div style={{ position: "relative" }}>
                        <Search size={16} strokeWidth={1.5} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
                        <input
                            ref={searchRef}
                            type="text"
                            className="input"
                            placeholder="Type product name…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                            autoFocus
                            style={{ paddingLeft: 36, padding: "10px 12px 10px 36px" }}
                        />
                    </div>
                    {showSuggestions && suggestions.length > 0 && (
                        <div
                            style={{
                                position: "absolute", top: "100%", left: 0, right: 0,
                                background: "white", border: "1px solid #E5E7EB", borderRadius: 8,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)", zIndex: 20,
                                maxHeight: 240, overflowY: "auto", marginTop: 4,
                            }}
                        >
                            {suggestions.map((p) => (
                                <div
                                    key={p.id}
                                    onMouseDown={() => addToCart(p)}
                                    style={{
                                        padding: "10px 14px", cursor: "pointer",
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        borderBottom: "1px solid #F3F4F6", transition: "background 0.1s",
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = "#F9FAFB"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                                >
                                    <span style={{ fontWeight: 500, fontSize: 14 }}>{p.name}</span>
                                    <span style={{ display: "flex", gap: 12, fontSize: 13 }}>
                                        <span style={{ color: "#0F3D2E", fontWeight: 600 }}>₹{p.sellingPrice}</span>
                                        {p.trackStock && (
                                            <span style={{ color: p.stockQuantity < 5 ? "#DC2626" : "#9CA3AF" }}>
                                                Stock: {p.stockQuantity}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                    {showSuggestions && suggestions.length === 0 && search.length > 1 && (
                        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "white", border: "1px solid #E5E7EB", borderRadius: 8, padding: 12, fontSize: 13, color: "#9CA3AF", marginTop: 4 }}>
                            No products found
                        </div>
                    )}
                </div>

                {/* Cart */}
                {cart.length > 0 && (
                    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th style={{ textAlign: "center", width: 80 }}>Qty</th>
                                    <th style={{ textAlign: "right" }}>Price</th>
                                    <th style={{ textAlign: "right" }}>Total</th>
                                    <th style={{ width: 32 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.product.id}>
                                        <td style={{ fontWeight: 500 }}>{item.product.name}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <input
                                                type="number" min={1} value={item.quantity}
                                                onChange={(e) => updateQty(item.product.id, parseInt(e.target.value) || 1)}
                                                style={{ width: 52, textAlign: "center", border: "1px solid #E5E7EB", borderRadius: 4, padding: 4, fontSize: 14, fontFamily: "inherit", outline: "none" }}
                                            />
                                        </td>
                                        <td style={{ textAlign: "right", color: "#6B7280" }}>₹{item.product.sellingPrice}</td>
                                        <td style={{ textAlign: "right", fontWeight: 600 }}>₹{(item.product.sellingPrice * item.quantity).toLocaleString("en-IN")}</td>
                                        <td>
                                            <button onClick={() => removeItem(item.product.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 4 }} title="Remove">
                                                <X size={14} strokeWidth={1.5} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {cart.length === 0 && (
                    <div className="card" style={{ textAlign: "center", padding: "48px 24px", color: "#9CA3AF", fontSize: 14 }}>
                        <Search size={28} strokeWidth={1} style={{ marginBottom: 8, color: "#D1D5DB" }} />
                        <div>Search and add products to start billing</div>
                    </div>
                )}
            </div>

            {/* Right: Payment Summary */}
            <div style={{ position: "sticky", top: 0, alignSelf: "flex-start" }}>
                <div className="card">
                    <div className="section-label" style={{ marginBottom: 16 }}>Payment Summary</div>
                    <div style={{ marginBottom: 8, fontSize: 13, color: "#9CA3AF" }}>{cart.length} item(s)</div>
                    <div style={{ fontSize: 32, fontWeight: 700, color: "#111827", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #E5E7EB", textAlign: "right", letterSpacing: "-0.02em" }}>
                        ₹{grandTotal.toLocaleString("en-IN")}
                    </div>

                    <label className="label">Payment Method</label>
                    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                        {(["CASH", "UPI"] as const).map((method) => (
                            <button
                                key={method}
                                onClick={() => setPaymentMethod(method)}
                                style={{
                                    flex: 1, padding: 10, borderRadius: 6,
                                    border: `1px solid ${paymentMethod === method ? "#22C55E" : "#E5E7EB"}`,
                                    background: paymentMethod === method ? "#DCFCE7" : "white",
                                    color: paymentMethod === method ? "#166534" : "#6B7280",
                                    fontWeight: 500, cursor: "pointer", fontSize: 14, fontFamily: "inherit",
                                    transition: "all 0.12s ease",
                                }}
                            >
                                {method}
                            </button>
                        ))}
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ width: "100%", padding: 12, fontSize: 15, fontWeight: 600 }}
                        onClick={generateBill}
                        disabled={cart.length === 0 || loading}
                    >
                        {loading ? "Generating…" : "Generate Bill"}
                    </button>

                    {cart.length === 0 && (
                        <p style={{ fontSize: 12, color: "#9CA3AF", textAlign: "center", marginTop: 8 }}>
                            Add items to generate bill
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
