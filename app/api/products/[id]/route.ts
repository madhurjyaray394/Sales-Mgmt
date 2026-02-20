import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@/services/product.service";

export const dynamic = "force-dynamic";

// PUT /api/products/[id]
export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { name, sellingPrice, costPrice, stockQuantity, trackStock } = body;

        const product = await ProductService.updateProduct(id, {
            name: name?.trim(),
            sellingPrice: parseFloat(sellingPrice),
            costPrice: parseFloat(costPrice || 0),
            stockQuantity: parseInt(stockQuantity || 0),
            trackStock: trackStock !== false,
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
    }
}

// DELETE /api/products/[id]
export async function DELETE(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await ProductService.deleteProduct(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
    }
}
