"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Loader2, Sparkles } from "lucide-react";
import { useData } from "@/contexts/DataContext";

type Message = {
    role: "user" | "ai";
    content: string;
};

export function BusinessAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: "Hello! I am your Retail Business Assistant. Ask me for sales tips, marketing suggestion, or inventory advice." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { fetchDashboardStats } = useData();

    // Limit rapid spam attacks
    const [lastSendTime, setLastSendTime] = useState(0);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();

        const text = input.trim();
        if (!text || loading) return;

        // Rate limit: 2 seconds coalesce
        const now = Date.now();
        if (now - lastSendTime < 2000) return;
        setLastSendTime(now);

        // Limit character length to 500
        if (text.length > 500) {
            alert("Please keep your message under 500 characters.");
            return;
        }

        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: text }]);
        setLoading(true);

        try {
            // Fetch live context silently
            let contextData = null;
            try {
                const stats = await fetchDashboardStats();
                contextData = {
                    todaySales: stats.today.total,
                    todayTransactions: stats.today.transactions,
                    topProducts: stats.topProducts.slice(0, 3).map((p: any) => p.name),
                    lowStockItems: stats.lowStock.slice(0, 3).map((p: any) => p.name),
                };
            } catch (err) {
                // Not a fatal error if stats fail to fetch
            }

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text, context: contextData }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
            } else {
                setMessages((prev) => [...prev, { role: "ai", content: `Error: ${data.error}` }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { role: "ai", content: "Network error. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "#0B2F23", // Deep emerald
                        color: "white",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 50,
                        transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Sparkles size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: 360,
                        height: 520,
                        backgroundColor: "white",
                        borderRadius: 16,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 50,
                        overflow: "hidden",
                        border: "1px solid #E5E7EB",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background: "#0B2F23",
                            padding: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "white",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ background: "rgba(255,255,255,0.1)", padding: 6, borderRadius: 8 }}>
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Business Assistant</h3>
                                <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>AI Retail Advisor</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "rgba(255,255,255,0.7)",
                                cursor: "pointer",
                                display: "flex",
                                padding: 4,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div style={{ flex: 1, padding: 16, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, background: "#F9FAFB" }}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                                    maxWidth: "85%",
                                    padding: "10px 14px",
                                    borderRadius: 12,
                                    borderBottomRightRadius: msg.role === "user" ? 4 : 12,
                                    borderBottomLeftRadius: msg.role === "ai" ? 4 : 12,
                                    background: msg.role === "user" ? "#0B2F23" : "white",
                                    color: msg.role === "user" ? "white" : "#111827",
                                    fontSize: 14,
                                    lineHeight: "1.5",
                                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                    border: msg.role === "ai" ? "1px solid #E5E7EB" : "none",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {loading && (
                            <div style={{ alignSelf: "flex-start", padding: "12px 16px", background: "white", borderRadius: 12, border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: 8, color: "#6B7280", fontSize: 13 }}>
                                <Loader2 size={16} className="animate-spin" />
                                Thinking...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSend}
                        style={{
                            padding: 12,
                            background: "white",
                            borderTop: "1px solid #E5E7EB",
                            display: "flex",
                            gap: 8,
                        }}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask for business advice..."
                            disabled={loading}
                            style={{
                                flex: 1,
                                padding: "10px 14px",
                                borderRadius: 8,
                                border: "1px solid #D1D5DB",
                                fontSize: 14,
                                outline: "none",
                                transition: "border-color 0.2s ease",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#0B2F23")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#D1D5DB")}
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            style={{
                                padding: "0 14px",
                                background: input.trim() && !loading ? "#0B2F23" : "#E5E7EB",
                                color: input.trim() && !loading ? "white" : "#9CA3AF",
                                border: "none",
                                borderRadius: 8,
                                cursor: input.trim() && !loading ? "pointer" : "default",
                                transition: "all 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Send size={18} strokeWidth={2} />
                        </button>
                    </form>
                </div>
            )}
            <style jsx global>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </>
    );
}
