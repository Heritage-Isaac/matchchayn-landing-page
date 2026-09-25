import { NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { env } from "@/config/env";
import { Resend } from "resend";
import WaitlistEmail from "@/emails/WaitlistEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

async function handler(request: Request) {
  try {
    const body = await request.json();
    const { name, email, gender, timestamp } = body;

    console.log(`[QStash Worker] Processing waitlist for: ${email}`);

    // 1. Send to Google Sheets
    if (env.GOOGLE_SHEETS_WEBHOOK_URL) {
      const response = await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, gender, timestamp }),
      });

      if (!response.ok) {
        // If this throws, QStash will catch it and automatically retry later!
        throw new Error(`Google Sheets Webhook failed: ${response.status}`);
      }
    }

    // 2. Send email using Resend
    if (env.RESEND_API_KEY) {
      const firstNameOnly = name.split(" ")[0];
      await resend.emails.send({
        from: "MatchChayn <hello@app.matchchayn.com>",
        to: email,
        subject: "Welcome to the MatchChayn waitlist! 🎉",
        react: WaitlistEmail({ firstName: firstNameOnly }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[QStash Worker Error]:", error);
    // Returning a 500 tells QStash that this task failed and needs to be retried
    return NextResponse.json({ error: "Failed to process task" }, { status: 500 });
  }
}

// Wrapping the handler ensures ONLY Upstash can call this URL
export const POST = verifySignatureAppRouter(handler);
