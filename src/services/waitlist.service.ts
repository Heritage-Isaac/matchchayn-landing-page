import { env } from "@/config/env";
import { Resend } from "resend";
import WaitlistEmail from "@/emails/WaitlistEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

/**
 * Handles the actual business logic for processing a waitlist signup:
 * 1. Saves data to Google Sheets
 * 2. Sends the welcome email via Resend
 */
export async function processWaitlistSignup(name: string, email: string, gender: string, timestamp: string) {
  // 1. Send to Google Sheets
  if (env.GOOGLE_SHEETS_WEBHOOK_URL) {
    const response = await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, gender, timestamp }),
    });

    if (!response.ok) {
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
}
