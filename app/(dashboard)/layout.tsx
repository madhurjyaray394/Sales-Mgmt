"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DataProvider, useData } from "@/contexts/DataContext";
import {
    LayoutDashboard,
    Receipt,
    Package,
    TrendingUp,
    LogOut,
    Box,
} from "lucide-react";

const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/billing", label: "Billing", icon: Receipt },
    { href: "/products", label: "Products", icon: Package },
    { href: "/sales", label: "Sales History", icon: TrendingUp },
];

function DashboardContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { logout, isGuest } = useData();

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: 240,
                    background: "#0B2F23",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                }}
            >
                {/* Logo */}
                <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                background: "#22C55E",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box size={16} color="white" strokeWidth={2} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ color: "white", fontWeight: 600, fontSize: 14 }}>
                                Bikri

                            </span>
                            {isGuest && (
                                <span style={{ fontSize: 11, color: "#0cb363ff", fontWeight: 500 }}>
                                    Welcome Guest
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Section Label */}
                <div style={{ padding: "16px 20px 8px", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Menu
                </div>

                {/* Nav */}
                <nav style={{ flex: 1, padding: "0 12px" }}>
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "9px 12px",
                                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                                    background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                                    borderLeft: isActive ? "4px solid #22C55E" : "4px solid transparent",
                                    fontWeight: isActive ? 500 : 400,
                                    fontSize: 14,
                                    textDecoration: "none",
                                    marginBottom: 2,
                                    borderRadius: "0 6px 6px 0",
                                    transition: "all 0.12s ease",
                                }}
                            >
                                <Icon size={18} strokeWidth={1.5} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div style={{ padding: "16px" }}>
                    <button
                        onClick={logout}
                        style={{
                            width: "100%",
                            padding: "8px 12px",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 6,
                            color: "rgba(255,255,255,0.5)",
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.12s ease",
                            fontFamily: "inherit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                    >
                        <LogOut size={15} strokeWidth={1.5} />
                        {isGuest ? "Exit Guest Mode" : "Sign Out"}
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main
                style={{
                    flex: 1,
                    padding: 24,
                    overflowY: "auto",
                    maxHeight: "100vh",
                    background: "#F5F7F9",
                }}
            >
                {children}
            </main>
        </div>
    );
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DataProvider>
            <DashboardContent>{children}</DashboardContent>
        </DataProvider>
    );
}
