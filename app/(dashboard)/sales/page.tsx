"use client";

import { useState, useEffect, useCallback } from "react";
import { useData } from "@/contexts/DataContext";
import { Transaction } from "@/lib/data/types";
import { Download, X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { CustomDatePicker } from "@/components/CustomDatePicker";

export default function SalesPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<Transaction | null>(null);

    const { fetchTransactions, isGuest } = useData();

    const fetchSales = useCallback(async (pg = 1, f = from, t = to) => {
        setLoading(true);
        try {
            const data = await fetchTransactions(pg, f, t);
            setTransactions(data.transactions);
            setTotal(data.total);
        } finally {
            setLoading(false);
        }
    }, [from, to, fetchTransactions]);

    useEffect(() => { fetchSales(1); }, [from, to, fetchSales]);

    function exportCSV() {
        if (isGuest) { alert("CSV Export is not available in Guest Mode"); return; }
        let url = "/api/transactions/export?";
        if (from) url += `from=${from}&`;
        if (to) url += `to=${to}`;
        window.open(url, "_blank");
    }

    const pageSize = 20;
    const totalPages = Math.ceil(total / pageSize);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <h1 className="page-title">Sales History</h1>
                <button className="btn btn-secondary" onClick={exportCSV} style={{ fontSize: 13 }}>
                    <Download size={14} strokeWidth={1.5} />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div className="card" style={{ marginBottom: 16, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
                <div>
                    <CustomDatePicker
                        label="From Date"
                        value={from}
                        onChange={(val) => { setFrom(val); setPage(1); }}
                    />
                </div>
                <div>
                    <CustomDatePicker
                        label="To Date"
                        value={to}
                        onChange={(val) => { setTo(val); setPage(1); }}
                    />
                </div>
                {(from || to) && (
                    <button className="btn btn-secondary" onClick={() => { setFrom(""); setTo(""); setPage(1); }} style={{ fontSize: 13 }}>Clear Filter</button>
                )}
                <span style={{ color: "#9CA3AF", fontSize: 13, marginLeft: "auto" }}>
                    {total} transaction{total !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Table */}
            <div className="card" style={{ padding: 0 }}>
                <table>
                    <thead>
                        <tr>
                            <th>Bill #</th>
                            <th>Date & Time</th>
                            <th>Items</th>
                            <th>Payment</th>
                            <th style={{ textAlign: "right" }}>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr><td colSpan={6} style={{ textAlign: "center", color: "#9CA3AF", padding: 32 }}>Loading…</td></tr>
                        )}
                        {!loading && transactions.length === 0 && (
                            <tr><td colSpan={6} style={{ textAlign: "center", color: "#9CA3AF", padding: 32 }}>No transactions found.</td></tr>
                        )}
                        {transactions.map((t) => (
                            <tr key={t.id} style={{ cursor: "pointer" }} onClick={() => setDetail(t)}>
                                <td style={{ fontWeight: 600, fontFamily: "monospace", fontSize: 13 }}>
                                    #{t.id.slice(-8).toUpperCase()}
                                </td>
                                <td style={{ color: "#6B7280", fontSize: 13 }}>
                                    {new Date(t.createdAt).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                                </td>
                                <td style={{ color: "#6B7280", fontSize: 13 }}>
                                    {t.items.slice(0, 2).map((i) => i.product.name).join(", ")}
                                    {t.items.length > 2 && ` +${t.items.length - 2} more`}
                                </td>
                                <td>
                                    <span className={`badge ${t.paymentMethod === "CASH" ? "badge-green" : "badge-blue"}`}>{t.paymentMethod}</span>
                                </td>
                                <td style={{ textAlign: "right", fontWeight: 600 }}>₹{t.totalAmount.toLocaleString("en-IN")}</td>
                                <td style={{ color: "#0F3D2E", fontSize: 13, fontWeight: 500 }}>View</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16, alignItems: "center" }}>
                    <button className="btn btn-secondary" onClick={() => { const p = page - 1; setPage(p); fetchSales(p); }} disabled={page === 1} style={{ fontSize: 13, padding: "6px 12px" }}>
                        <ChevronLeft size={14} strokeWidth={1.5} /> Previous
                    </button>
                    <span style={{ fontSize: 13, color: "#6B7280" }}>Page {page} of {totalPages}</span>
                    <button className="btn btn-secondary" onClick={() => { const p = page + 1; setPage(p); fetchSales(p); }} disabled={page === totalPages} style={{ fontSize: 13, padding: "6px 12px" }}>
                        Next <ChevronRight size={14} strokeWidth={1.5} />
                    </button>
                </div>
            )}

            {/* Detail Modal */}
            {detail && (
                <div className="modal-overlay" onClick={() => setDetail(null)}>
                    <div className="modal" style={{ maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                            <div>
                                <h2 style={{ fontWeight: 600, fontSize: 16, color: "#111827" }}>Bill #{detail.id.slice(-8).toUpperCase()}</h2>
                                <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>
                                    {new Date(detail.createdAt).toLocaleString("en-IN", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                                </p>
                            </div>
                            <button onClick={() => setDetail(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 4 }}>
                                <X size={16} strokeWidth={1.5} />
                            </button>
                        </div>

                        <table style={{ marginBottom: 16 }}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th style={{ textAlign: "center" }}>Qty</th>
                                    <th style={{ textAlign: "right" }}>Price</th>
                                    <th style={{ textAlign: "right" }}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detail.items.map((item) => (
                                    <tr key={item.productId}>
                                        <td>{item.product.name}</td>
                                        <td style={{ textAlign: "center" }}>{item.quantity}</td>
                                        <td style={{ textAlign: "right", color: "#6B7280" }}>₹{item.priceAtSale}</td>
                                        <td style={{ textAlign: "right", fontWeight: 600 }}>₹{item.total.toLocaleString("en-IN")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span className={`badge ${detail.paymentMethod === "CASH" ? "badge-green" : "badge-blue"}`}>{detail.paymentMethod}</span>
                            <div style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>₹{detail.totalAmount.toLocaleString("en-IN")}</div>
                        </div>

                        <div style={{ marginTop: 16, textAlign: "right" }}>
                            <button
                                className="btn btn-primary" style={{ fontSize: 13 }}
                                onClick={async () => {
                                    if (isGuest) {
                                        const { generateInvoicePDF } = await import("@/lib/pdf");
                                        const pdfBytes = await generateInvoicePDF({
                                            ...detail,
                                            createdAt: new Date(detail.createdAt),
                                            items: detail.items.map((i) => ({ name: i.product.name, quantity: i.quantity, priceAtSale: i.priceAtSale, total: i.total })),
                                        });
                                        const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
                                        const url = URL.createObjectURL(blob);
                                        window.open(url, "_blank");
                                    } else {
                                        window.open(`/api/invoice/${detail.id}`, "_blank");
                                    }
                                }}
                            >
                                <FileText size={14} strokeWidth={1.5} />
                                Download Invoice
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
