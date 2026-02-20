"use client";

import { useEffect, useState } from "react";
import { useData } from "@/contexts/DataContext";
import { DashboardData } from "@/lib/data/types";
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

function StatCard({
    label,
    value,
    sub,
    trend,
}: {
    label: string;
    value: string;
    sub?: string;
    trend?: "up" | "down" | "neutral";
}) {
    return (
        <div className="card" style={{ flex: 1, minWidth: 180 }}>
            <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                {label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#111827", letterSpacing: "-0.02em" }}>
                    {value}
                </span>
                {trend === "up" && (
                    <span style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 12, color: "#22C55E", fontWeight: 500 }}>
                        <ArrowUpRight size={14} strokeWidth={2} />
                    </span>
                )}
                {trend === "down" && (
                    <span style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 12, color: "#EF4444", fontWeight: 500 }}>
                        <ArrowDownRight size={14} strokeWidth={2} />
                    </span>
                )}
            </div>
            {sub && <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>{sub}</div>}
        </div>
    );
}

const DONUT_COLORS = ["#0F3D2E", "#22C55E", "#94A3B8"];

export default function DashboardPage() {
    const { fetchDashboardStats } = useData();
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState<"daily" | "weekly" | "monthly" | "yearly">("daily");

    useEffect(() => {
        setLoading(true);
        fetchDashboardStats(timeRange)
            .then(setData)
            .finally(() => setLoading(false));
    }, [fetchDashboardStats, timeRange]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
                <div style={{ color: "#9CA3AF", fontSize: 14 }}>Loading dashboard…</div>
            </div>
        );
    }

    if (!data) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
                <div style={{ color: "#9CA3AF", fontSize: 14 }}>No data available.</div>
            </div>
        );
    }

    const donutData = [
        { name: "Cash", value: data.today.cash || 0 },
        { name: "UPI", value: data.today.upi || 0 },
    ].filter(d => d.value > 0);

    const totalPayments = donutData.reduce((s, d) => s + d.value, 0);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                <h1 className="page-title" style={{ marginBottom: 0 }}>Dashboard</h1>

                {/* Time Range Toggle */}
                <div style={{ display: "flex", background: "#F3F4F6", padding: 4, borderRadius: 8, gap: 4 }}>
                    {(["daily", "weekly", "monthly", "yearly"] as const).map(range => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            style={{
                                padding: "6px 12px",
                                fontSize: 13,
                                fontWeight: timeRange === range ? 600 : 500,
                                color: timeRange === range ? "#0F3D2E" : "#6B7280",
                                background: timeRange === range ? "white" : "transparent",
                                border: "none",
                                borderRadius: 6,
                                cursor: "pointer",
                                boxShadow: timeRange === range ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                                transition: "all 0.2s ease",
                                textTransform: "capitalize"
                            }}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stat Cards */}
            <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <StatCard
                    label={timeRange === "daily" ? "Today's Revenue" : `${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} Revenue`}
                    value={`₹${data.today.total.toLocaleString("en-IN")}`}
                    sub={`${data.today.transactions} transactions`}
                    trend={data.today.total > 0 ? "up" : "neutral"}
                />
                <StatCard
                    label="Cash Sales"
                    value={`₹${data.today.cash.toLocaleString("en-IN")}`}
                />
                <StatCard
                    label="UPI Sales"
                    value={`₹${data.today.upi.toLocaleString("en-IN")}`}
                />
                <StatCard
                    label={timeRange === "daily" ? "Today's Profit" : `${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} Profit`}
                    value={`₹${data.today.profit.toLocaleString("en-IN")}`}
                    trend={data.today.profit > 0 ? "up" : data.today.profit < 0 ? "down" : "neutral"}
                />
            </div>

            {/* Second row: Chart + Donut */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 32 }}>
                {/* Revenue Bar Chart */}
                <div className="card">
                    <div className="section-label" style={{ marginBottom: 16 }}>
                        Revenue — {timeRange === 'daily' || timeRange === 'weekly' ? 'Last 7 Days' : timeRange === 'monthly' ? 'Last 30 Days' : 'Last 12 Months'}
                    </div>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={data.chartData} barCategoryGap="25%">
                            <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                                axisLine={{ stroke: "#E5E7EB" }}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                                axisLine={false}
                                tickLine={false}
                                width={50}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: "#111827",
                                    border: "none",
                                    borderRadius: 8,
                                    color: "white",
                                    fontSize: 13,
                                    padding: "8px 12px",
                                }}
                                labelStyle={{ color: "#9CA3AF", fontSize: 11 }}
                                cursor={{ fill: "rgba(34, 197, 94, 0.05)" }}
                            />
                            <Bar dataKey="sales" fill="#0F3D2E" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Payment Breakdown Donut */}
                <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div className="section-label" style={{ marginBottom: 16, alignSelf: "flex-start" }}>Payment Split</div>
                    {donutData.length > 0 ? (
                        <div style={{ position: "relative", width: 160, height: 160 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={donutData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={70}
                                        dataKey="value"
                                        strokeWidth={0}
                                    >
                                        {donutData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={DONUT_COLORS[index % DONUT_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ background: "#111827", border: "none", borderRadius: 8, color: "white", fontSize: 13, padding: "6px 10px" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                                <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>₹{totalPayments.toLocaleString("en-IN")}</div>
                                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Total</div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ color: "#9CA3AF", fontSize: 13 }}>No sales today</div>
                    )}
                    {/* Legend */}
                    <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                        {donutData.map((d, i) => (
                            <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B7280" }}>
                                <div style={{ width: 8, height: 8, borderRadius: 2, background: DONUT_COLORS[i] }} />
                                {d.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Third row: Top Products + Low Stock */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {/* Top Products */}
                <div className="card">
                    <div className="section-label" style={{ marginBottom: 16 }}>Top Products</div>
                    {data.topProducts.length === 0 ? (
                        <div style={{ color: "#9CA3AF", fontSize: 13, padding: "16px 0" }}>No sales data yet.</div>
                    ) : (
                        <div>
                            {data.topProducts.map((p, i) => {
                                const maxRevenue = Math.max(...data.topProducts.map(x => x.revenue));
                                const barWidth = maxRevenue > 0 ? (p.revenue / maxRevenue) * 100 : 0;
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            padding: "10px 0",
                                            borderBottom: i < data.topProducts.length - 1 ? "1px solid #F3F4F6" : "none",
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                                            <span style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>{p.name}</span>
                                            <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>₹{p.revenue.toLocaleString("en-IN")}</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <div style={{ flex: 1, height: 4, background: "#F3F4F6", borderRadius: 2, overflow: "hidden" }}>
                                                <div style={{ width: `${barWidth}%`, height: "100%", background: "#22C55E", borderRadius: 2, transition: "width 0.3s ease" }} />
                                            </div>
                                            <span style={{ fontSize: 11, color: "#9CA3AF", minWidth: 40, textAlign: "right" }}>{p.quantity} sold</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Low Stock Alerts */}
                <div className="card">
                    <div className="section-label" style={{ marginBottom: 16 }}>Low Stock Alerts</div>
                    {data.lowStock.length === 0 ? (
                        <div style={{ color: "#9CA3AF", fontSize: 13, padding: "16px 0" }}>All products are well stocked.</div>
                    ) : (
                        <div>
                            {data.lowStock.map((p, i) => (
                                <div
                                    key={p.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "10px 0",
                                        borderBottom: i < data.lowStock.length - 1 ? "1px solid #F3F4F6" : "none",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <AlertTriangle size={14} color="#F59E0B" strokeWidth={2} />
                                        <span style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>{p.name}</span>
                                    </div>
                                    <span className="badge badge-yellow">{p.stockQuantity} left</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
