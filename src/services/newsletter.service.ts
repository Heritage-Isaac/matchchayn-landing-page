import { env } from "@/config/env";
import { Resend } from "resend";
import NewsletterEmail from "@/emails/NewsletterEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

export async function processNewsletterSignup(email: string, timestamp: string) {
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

  if (env.RESEND_API_KEY) {
    await resend.emails.send({
      from: "MatchChayn <hello@app.matchchayn.com>",
      to: email,
      subject: "Welcome to MatchChayn newsletter! 🎉",
      react: NewsletterEmail(),
    });
  }
}
