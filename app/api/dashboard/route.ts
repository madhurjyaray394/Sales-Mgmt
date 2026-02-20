import { NextResponse } from "next/server";
import { DashboardService } from "@/services/dashboard.service";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const range = searchParams.get("range") as "daily" | "weekly" | "monthly" | "yearly" || "daily";

        const data = await DashboardService.getDashboardData(range);
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
    }
}
