import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@/services/product.service";

export const dynamic = "force-dynamic";

// GET /api/products?search=...
export async function GET(req: NextRequest) {
    const search = req.nextUrl.searchParams.get("search") || "";

    try {
        const products = await ProductService.getProducts({ search });
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}

// POST /api/products
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, sellingPrice, costPrice, stockQuantity, trackStock } = body;

        if (!name || sellingPrice == null) {
            return NextResponse.json({ error: "Name and selling price required" }, { status: 400 });
        }

        const product = await ProductService.createProduct({
            name: name.trim(),
            sellingPrice: parseFloat(sellingPrice),
            costPrice: parseFloat(costPrice || 0),
            stockQuantity: parseInt(stockQuantity || 0),
            trackStock: trackStock !== false,
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }
}
