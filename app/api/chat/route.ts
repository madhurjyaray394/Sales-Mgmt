import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const apiKey = process.env.OPENROUTER_API_KEY;

const openai = apiKey ? new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
}) : null;

export async function POST(req: Request) {
    if (!openai) {
        return NextResponse.json(
            { error: "OpenRouter API key not configured" },
            { status: 500 }
        );
    }

    try {
        const body = await req.json();
        const { message, context } = body;

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const systemPrompt = `You are a retail business advisor helping small local shop owners improve sales, profit, inventory management, and customer retention.
Do not use emojis in your response. Keep answers practical, actionable, and local retail-relevant.
CRITICAL: You must be extremely concise. Keep your answer to 1-2 short sentences maximum. Direct and to the point.`;

        let fullPrompt = "";

        if (context) {
            fullPrompt += `Business Data:\n${JSON.stringify(context, null, 2)}\n\n`;
        }

        fullPrompt += `User Question:\n${message}\n\nPlease provide a helpful response.`;

        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.5-flash", // Using gemini flash natively via OpenRouter!
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: fullPrompt }
            ],
            max_tokens: 300, // Strictly limit response to save credits
        });

        const text = completion.choices[0].message.content;

        return NextResponse.json({ reply: text });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
