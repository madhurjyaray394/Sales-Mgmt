import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "@/services/transaction.service";

export const dynamic = 'force-dynamic';

interface BillItem {
    productId: string;
    quantity: number;
}

// GET /api/transactions?from=...&to=...&page=1
export async function GET(req: NextRequest) {
    const from = req.nextUrl.searchParams.get("from") || undefined;
    const to = req.nextUrl.searchParams.get("to") || undefined;
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const pageSize = 20;

    try {
        const result = await TransactionService.getTransactions({ from, to, page, pageSize });
        return NextResponse.json(result);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
    }
}

// POST /api/transactions — create bill
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const items: BillItem[] = body.items;
        const paymentMethod: "CASH" | "UPI" = body.paymentMethod;

        if (!items?.length || !paymentMethod) {
            return NextResponse.json({ error: "Items and payment method required" }, { status: 400 });
        }

        const transaction = await TransactionService.createTransaction({
            items,
            paymentMethod
        });

        return NextResponse.json(transaction, { status: 201 });
    } catch (error) {
        console.error(error);
        // Supabase RPC errors usually come as { message: ... }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errorMessage = (error as any).message || "Failed to create transaction";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
