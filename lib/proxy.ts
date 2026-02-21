import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow login and logout API routes
    if (
        pathname.startsWith("/login") ||
        pathname === "/api/auth/login" ||
        pathname === "/api/auth/logout"
    ) {
        return NextResponse.next();
    }

    const token = request.cookies.get("auth_token")?.value;
    const isGuest = request.cookies.get("sm_guest_mode")?.value === "true";

    if ((!token || !verifyToken(token)) && !isGuest) {
        if (pathname.startsWith("/api/")) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
