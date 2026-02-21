import { PDFDocument, rgb, StandardFonts, PDFName } from "pdf-lib";

interface InvoiceItem {
    name: string;
    quantity: number;
    priceAtSale: number;
    total: number;
}

interface InvoiceData {
    id: string;
    createdAt: Date;
    paymentMethod: string;
    totalAmount: number;
    items: InvoiceItem[];
}

export async function generateInvoicePDF(data: InvoiceData): Promise<Uint8Array> {
    const doc = await PDFDocument.create();
    const page = doc.addPage([226, 600]); // ~80mm thermal width in points
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const boldFont = await doc.embedFont(StandardFonts.HelveticaBold);

    const { width } = page.getSize();
    let y = 570;
    const lineH = 14;
    const margin = 10;
    const col = width - margin;

    const drawText = (
        text: string,
        x: number,
        yPos: number,
        size = 9,
        useBold = false,
        align: "left" | "right" | "center" = "left"
    ) => {
        const f = useBold ? boldFont : font;
        let dx = x;
        if (align === "right") {
            dx = x - f.widthOfTextAtSize(text, size);
        } else if (align === "center") {
            dx = margin + (col - margin) / 2 - f.widthOfTextAtSize(text, size) / 2;
        }
        page.drawText(text, { x: dx, y: yPos, size, font: f, color: rgb(0, 0, 0) });
    };

    const drawLine = (yPos: number) => {
        page.drawLine({
            start: { x: margin, y: yPos },
            end: { x: col, y: yPos },
            thickness: 0.5,
            color: rgb(0.5, 0.5, 0.5),
        });
    };

    // Header
    drawText("SALES RECEIPT", 0, y, 14, true, "center");
    y -= lineH + 4;
    drawText(`Bill No: ${data.id.slice(-8).toUpperCase()}`, margin, y, 8);
    drawText(
        new Date(data.createdAt).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }),
        col,
        y,
        8,
        false,
        "right"
    );
    y -= lineH;
    drawLine(y);
    y -= lineH;

    // Column headers
    drawText("ITEM", margin, y, 8, true);
    drawText("QTY", margin + 90, y, 8, true);
    drawText("PRICE", margin + 120, y, 8, true);
    drawText("TOTAL", col, y, 8, true, "right");
    y -= 4;
    drawLine(y);
    y -= lineH;

    // Items
    for (const item of data.items) {
        // Wrap long product names
        const maxNameLen = 18;
        const name =
            item.name.length > maxNameLen ? item.name.slice(0, maxNameLen) + "…" : item.name;
        drawText(name, margin, y, 8);
        drawText(String(item.quantity), margin + 90, y, 8);
        drawText(`Rs. ${item.priceAtSale.toFixed(2)}`, margin + 120, y, 8);
        drawText(`Rs. ${item.total.toFixed(2)}`, col, y, 8, false, "right");
        y -= lineH;
    }

    y -= 4;
    drawLine(y);
    y -= lineH;

    // Total
    drawText("GRAND TOTAL", margin, y, 10, true);
    drawText(`Rs. ${data.totalAmount.toFixed(2)}`, col, y, 10, true, "right");
    y -= lineH + 4;
    drawText(`Payment: ${data.paymentMethod}`, margin, y, 8);
    y -= lineH + 8;
    drawLine(y);
    y -= lineH;
    drawText("Thank you for shopping with us!", 0, y, 8, false, "center");

    // Add JavaScript to auto-open the print dialog when the PDF is viewed
    doc.catalog.set(
        PDFName.of('OpenAction'),
        doc.context.obj({
            Type: 'Action',
            S: 'JavaScript',
            JS: 'this.print({bUI:true,bSilent:false,bShrinkToFit:true});',
        })
    );

    const pdfBytes = await doc.save();
    return pdfBytes;
}
