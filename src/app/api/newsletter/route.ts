import { NextResponse, after } from "next/server";
import { env } from "@/config/env";
import { Resend } from "resend";
import NewsletterEmail from "@/emails/NewsletterEmail";

const resend = new Resend(env.RESEND_API_KEY || "dummy_key");

// In-memory rate limiting (basic defense against burst spam)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting (Abuse Prevention)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    if (ip !== "unknown") {
      const userLimit = rateLimit.get(ip);
      if (userLimit && now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
        if (userLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Too many requests, try again later." },
            { status: 429 },
          );
        }
        userLimit.count++;
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now });
      }
    }

    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // 3. Secrets & Environment (Use server-side env var)
    if (!env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL) {
      console.error(
        "[Newsletter API Error]: GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL is not set in environment variables.",
      );
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    // Process heavy tasks in the background so the user gets an instant success modal
    after(async () => {
      try {
        const response = await fetch(env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          console.error(`Google Sheets Webhook failed: ${response.status}`);
        }

        // Send email using Resend
        if (env.RESEND_API_KEY) {
          await resend.emails.send({
            from: "MatchChayn <hello@app.matchchayn.com>", // Update this to your verified domain
            to: email,
            subject: "Welcome to MatchChayn newsletter! 🎉",
            react: NewsletterEmail(),
          });
        }
      } catch (backgroundError) {
        console.error("[Newsletter Background Error]:", backgroundError);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // 4. Fault Isolation (Log full error internally, return safe generic message to client)
    console.error("[Newsletter API Error]:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
