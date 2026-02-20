"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, User } from "lucide-react";
import { supabase } from "@/lib/supabase";

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

    async function handleGoogleLogin() {
        setError("");
        setLoading(true);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/api/auth/callback`
                }
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message || "Failed to sign in with Google.");
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
                        {loading ? "Signing in…" : "Sign In with Email"}
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn"
                        style={{ width: "100%", padding: 10, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "white", border: "1px solid #E5E7EB", color: "#374151" }}
                        disabled={loading}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign in with Google
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
