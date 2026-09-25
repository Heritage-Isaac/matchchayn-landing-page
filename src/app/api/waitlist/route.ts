import { NextResponse, after } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { publishToQueue } from "@/services/queue.service";
import { processWaitlistSignup } from "@/services/waitlist.service";

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting (Abuse Prevention)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests, try again later." }, { status: 429 });
    }

    // 2. Data Privacy & Sanitization
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const gender = body.gender?.trim();

    if (!name || !email || !gender) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // 3. Queue / Background Processing
    // Attempt to offload this to Upstash QStash for guaranteed execution
    const queued = await publishToQueue("waitlist", { name, email, gender, timestamp });
    
    if (queued) {
      return NextResponse.json({ success: true });
    }

    // 4. Fallback to Next.js after() for local dev or if QStash isn't configured
    after(async () => {
      try {
        await processWaitlistSignup(name, email, gender, timestamp);
      } catch (backgroundError) {
        console.error("[Waitlist Background Error]:", backgroundError);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Waitlist API Error]:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
