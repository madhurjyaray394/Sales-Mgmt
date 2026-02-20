import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "@/services/transaction.service";

// GET /api/transactions/export?from=...&to=...
export async function GET(req: NextRequest) {
    const from = req.nextUrl.searchParams.get("from") || undefined;
    const to = req.nextUrl.searchParams.get("to") || undefined;

    const transactions = await TransactionService.getAllTransactions({ from, to });

    const rows: string[] = [
        "Bill ID,Date,Time,Payment Method,Items,Total Amount (₹)",
    ];

    for (const t of transactions) {
        const date = new Date(t.createdAt);
        const dateStr = date.toLocaleDateString("en-IN");
        const timeStr = date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
        const itemsStr = t.items
            .map((i) => `${i.product?.name || 'Unknown'} x${i.quantity}`)
            .join("; ");
        rows.push(
            `"${t.id.slice(-8).toUpperCase()}","${dateStr}","${timeStr}","${t.paymentMethod}","${itemsStr}","${t.totalAmount.toFixed(2)}"`
        );
    }

    const csv = rows.join("\n");

    return new NextResponse(csv, {
        headers: {
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": `attachment; filename="sales-export-${Date.now()}.csv"`,
        },
    });
}
