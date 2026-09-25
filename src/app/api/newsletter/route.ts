import { NextResponse, after } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { publishToQueue } from "@/services/queue.service";
import { processNewsletterSignup } from "@/services/newsletter.service";

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests, try again later." }, { status: 429 });
    }

    // 2. Data Parsing
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // 3. Queue / Background Processing
    const queued = await publishToQueue("newsletter", { email, timestamp });
    
    if (queued) {
      return NextResponse.json({ success: true });
    }

    // 4. Fallback to Next.js after()
    after(async () => {
      try {
        await processNewsletterSignup(email, timestamp);
      } catch (backgroundError) {
        console.error("[Newsletter Background Error]:", backgroundError);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Newsletter API Error]:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
