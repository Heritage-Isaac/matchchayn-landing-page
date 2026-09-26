import { env } from "@/config/env";
import { Resend } from "resend";
import WaitlistEmail from "@/emails/WaitlistEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

export async function processWaitlistSignup(name: string, email: string, gender: string, timestamp: string) {
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
