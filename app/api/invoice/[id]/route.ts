import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "@/services/transaction.service";
import { generateInvoicePDF } from "@/lib/pdf";

export const dynamic = 'force-dynamic';

// GET /api/invoice/[id]
export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const transaction = await TransactionService.getTransactionById(id);

    if (!transaction) {
        return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    const pdfBytes = await generateInvoicePDF({
        id: transaction.id,
        createdAt: new Date(transaction.createdAt),
        paymentMethod: transaction.paymentMethod,
        totalAmount: transaction.totalAmount,
        items: transaction.items.map((item) => ({
            name: item.product?.name || 'Unknown Product',
            quantity: item.quantity,
            priceAtSale: item.priceAtSale,
            total: item.total,
        })),
    });

    return new NextResponse(Buffer.from(pdfBytes), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="invoice-${id.slice(-8).toUpperCase()}.pdf"`,
        },
    });
}
