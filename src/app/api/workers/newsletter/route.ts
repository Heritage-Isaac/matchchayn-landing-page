import { NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { env } from "@/config/env";
import { Resend } from "resend";
import NewsletterEmail from "@/emails/NewsletterEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

async function handler(request: Request) {
  try {
    const body = await request.json();
    const { email, timestamp } = body;

    console.log(`[QStash Worker] Processing newsletter for: ${email}`);

    // 1. Send to Google Sheets
    if (env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL) {
      const response = await fetch(env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp }),
      });

      if (!response.ok) {
        throw new Error(`Google Sheets Webhook failed: ${response.status}`);
      }
    }

    // 2. Send email using Resend
    if (env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "MatchChayn <hello@app.matchchayn.com>",
        to: email,
        subject: "Welcome to MatchChayn newsletter! 🎉",
        react: NewsletterEmail(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[QStash Worker Error]:", error);
    return NextResponse.json({ error: "Failed to process task" }, { status: 500 });
  }
}

// Wrapping the handler ensures ONLY Upstash can call this URL
export const POST = verifySignatureAppRouter(handler);
