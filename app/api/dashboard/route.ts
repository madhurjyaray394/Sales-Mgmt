import { NextResponse } from "next/server";
import { DashboardService } from "@/services/dashboard.service";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const data = await DashboardService.getDashboardData();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
    }
}
