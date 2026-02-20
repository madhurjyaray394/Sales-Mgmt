import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "@/services/transaction.service";

export const dynamic = 'force-dynamic';

// GET /api/transactions/[id]
export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const transaction = await TransactionService.getTransactionById(id);

    if (!transaction) {
        return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    return NextResponse.json(transaction);
}
