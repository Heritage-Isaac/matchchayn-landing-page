import { NextResponse } from "next/server";
import { env } from "@/config/env";

export async function POST(request: Request) {
  try {
    const { name, email, gender } = await request.json();

    if (!name || !email || !gender) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (env.GOOGLE_SHEETS_WEBHOOK_URL) {
      const response = await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, gender, timestamp: new Date().toISOString() }),
      });

      if (!response.ok) {
        throw new Error("Failed to forward to Google Sheets");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

