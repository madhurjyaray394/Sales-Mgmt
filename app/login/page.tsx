"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, User } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("admin@shop.com");
    const [password, setPassword] = useState("admin123");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                router.push("/");
            } else {
                const data = await res.json();
                setError(data.error || "Login failed");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F7F9" }}>
            <div className="card" style={{ width: 380, padding: 32 }}>
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#0F3D2E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                        <Box size={18} color="white" strokeWidth={2} />
                    </div>
                    <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111827" }}>Bikri</h1>
                    <p style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4 }}>Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: 16 }}>
                        <label className="label">Email</label>
                        <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <label className="label">Password</label>
                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    {error && (
                        <div style={{ background: "#FEF2F2", color: "#DC2626", padding: "8px 12px", borderRadius: 6, fontSize: 13, marginBottom: 16, border: "1px solid #FECACA" }}>
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: 10, marginBottom: 12 }} disabled={loading}>
                        {loading ? "Signing in…" : "Sign In"}
                    </button>

                    <div style={{ position: "relative", textAlign: "center", margin: "16px 0" }}>
                        <div style={{ borderTop: "1px solid #E5E7EB", position: "absolute", top: "50%", left: 0, right: 0 }} />
                        <span style={{ background: "white", padding: "0 12px", position: "relative", fontSize: 12, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em" }}>or</span>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            localStorage.setItem("sm_guest_session", "true");
                            document.cookie = "sm_guest_mode=true; path=/; max-age=86400";
                            router.push("/");
                        }}
                        className="btn btn-secondary"
                        style={{ width: "100%", padding: 10 }}
                        disabled={loading}
                    >
                        <User size={15} strokeWidth={1.5} />
                        Continue as Guest
                    </button>
                    <p style={{ marginTop: 8, fontSize: 12, color: "#9CA3AF", textAlign: "center" }}>
                        Guest data is saved in this browser only.
                    </p>
                </form>
            </div>
        </div>
    );
}
