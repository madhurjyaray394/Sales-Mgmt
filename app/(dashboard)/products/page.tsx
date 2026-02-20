"use client";

import { useState, useEffect, useCallback } from "react";
import { useData } from "@/contexts/DataContext";
import { Product } from "@/lib/data/types";
import { Plus, Pencil, Trash2, AlertCircle } from "lucide-react";

const emptyForm = {
    name: "",
    sellingPrice: "",
    costPrice: "",
    stockQuantity: "",
    trackStock: true,
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState<Product | null>(null);
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

    const { fetchProducts, saveProduct: saveProductData, deleteProduct: deleteProductData } = useData();

    const fetchProductsCallback = useCallback(async (q?: string) => {
        const data = await fetchProducts(q);
        setProducts(data);
    }, [fetchProducts]);

    useEffect(() => { fetchProductsCallback(); }, [fetchProductsCallback]);

    useEffect(() => {
        const t = setTimeout(() => fetchProductsCallback(search), 250);
        return () => clearTimeout(t);
    }, [search, fetchProductsCallback]);

    function openAdd() {
        setEditProduct(null);
        setForm(emptyForm);
        setModalOpen(true);
    }

    function openEdit(p: Product) {
        setEditProduct(p);
        setForm({
            name: p.name,
            sellingPrice: String(p.sellingPrice),
            costPrice: String(p.costPrice),
            stockQuantity: String(p.stockQuantity),
            trackStock: p.trackStock,
        });
        setModalOpen(true);
    }

    async function saveProduct() {
        if (!form.name || !form.sellingPrice) return;
        setSaving(true);
        try {
            await saveProductData({
                id: editProduct?.id,
                name: form.name,
                sellingPrice: parseFloat(form.sellingPrice),
                costPrice: parseFloat(form.costPrice || "0"),
                stockQuantity: parseInt(form.stockQuantity || "0"),
                trackStock: form.trackStock,
            });
            setModalOpen(false);
            fetchProductsCallback(search);
        } catch (err) {
            console.error(err);
            alert("Failed to save product");
        } finally {
            setSaving(false);
        }
    }

    async function deleteProduct(id: string) {
        await deleteProductData(id);
        setDeleteConfirm(null);
        fetchProductsCallback(search);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <h1 className="page-title">Products</h1>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <input type="text" className="input" placeholder="Search products…" value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: 220 }} />
                    <button className="btn btn-primary" onClick={openAdd}>
                        <Plus size={15} strokeWidth={1.5} />
                        Add Product
                    </button>
                </div>
            </div>

            <div className="card" style={{ padding: 0 }}>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th style={{ textAlign: "right" }}>Selling Price</th>
                            <th style={{ textAlign: "right" }}>Cost Price</th>
                            <th style={{ textAlign: "right" }}>Stock</th>
                            <th style={{ textAlign: "right" }}>Margin</th>
                            <th style={{ textAlign: "center" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 && (
                            <tr><td colSpan={6} style={{ textAlign: "center", color: "#9CA3AF", padding: 32 }}>No products found.</td></tr>
                        )}
                        {products.map((p) => {
                            const margin = p.costPrice > 0 ? (((p.sellingPrice - p.costPrice) / p.costPrice) * 100).toFixed(0) : "-";
                            return (
                                <tr key={p.id}>
                                    <td style={{ fontWeight: 500 }}>
                                        {p.name}
                                        {!p.trackStock && <span style={{ fontSize: 11, color: "#9CA3AF", marginLeft: 6 }}>(untracked)</span>}
                                    </td>
                                    <td style={{ textAlign: "right", fontWeight: 600 }}>₹{p.sellingPrice}</td>
                                    <td style={{ textAlign: "right", color: "#6B7280" }}>₹{p.costPrice}</td>
                                    <td style={{ textAlign: "right" }}>
                                        {p.trackStock ? (
                                            <span className={`badge ${p.stockQuantity < 5 ? "badge-red" : p.stockQuantity < 15 ? "badge-yellow" : "badge-green"}`}>
                                                {p.stockQuantity}
                                            </span>
                                        ) : (
                                            <span className="badge badge-blue">N/A</span>
                                        )}
                                    </td>
                                    <td style={{ textAlign: "right", color: "#166534", fontWeight: 500 }}>
                                        {margin !== "-" ? `${margin}%` : "-"}
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
                                            <button className="btn btn-secondary" style={{ padding: "4px 10px", fontSize: 13 }} onClick={() => openEdit(p)}>
                                                <Pencil size={13} strokeWidth={1.5} /> Edit
                                            </button>
                                            <button className="btn btn-danger" style={{ padding: "4px 10px", fontSize: 13 }} onClick={() => setDeleteConfirm(p.id)}>
                                                <Trash2 size={13} strokeWidth={1.5} /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2 style={{ fontWeight: 600, marginBottom: 20, fontSize: 16, color: "#111827" }}>
                            {editProduct ? "Edit Product" : "Add Product"}
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <div>
                                <label className="label">Product Name *</label>
                                <input type="text" className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Basmati Rice 1kg" autoFocus />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                <div>
                                    <label className="label">Selling Price *</label>
                                    <input type="number" className="input" value={form.sellingPrice} onChange={(e) => setForm({ ...form, sellingPrice: e.target.value })} placeholder="0" min={0} />
                                </div>
                                <div>
                                    <label className="label">Cost Price</label>
                                    <input type="number" className="input" value={form.costPrice} onChange={(e) => setForm({ ...form, costPrice: e.target.value })} placeholder="0" min={0} />
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                    <input type="checkbox" id="trackStock" checked={form.trackStock} onChange={(e) => setForm({ ...form, trackStock: e.target.checked })} style={{ width: 16, height: 16, accentColor: "#22C55E" }} />
                                    <label htmlFor="trackStock" style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>Track Stock</label>
                                </div>
                                {form.trackStock && (
                                    <input type="number" className="input" value={form.stockQuantity} onChange={(e) => setForm({ ...form, stockQuantity: e.target.value })} placeholder="Stock quantity" min={0} />
                                )}
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: "flex-end" }}>
                            <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
                            <button className="btn btn-primary" onClick={saveProduct} disabled={saving || !form.name || !form.sellingPrice}>
                                {saving ? "Saving…" : editProduct ? "Update" : "Add Product"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirm */}
            {deleteConfirm && (
                <div className="modal-overlay">
                    <div className="modal" style={{ maxWidth: 360, textAlign: "center" }}>
                        <div style={{ marginBottom: 12, color: "#DC2626" }}>
                            <AlertCircle size={36} strokeWidth={1.5} />
                        </div>
                        <p style={{ fontSize: 14, marginBottom: 20, color: "#111827" }}>Delete this product? This cannot be undone.</p>
                        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                            <button className="btn btn-secondary" onClick={() => setDeleteConfirm(null)}>Cancel</button>
                            <button className="btn btn-danger" onClick={() => deleteProduct(deleteConfirm)}>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
