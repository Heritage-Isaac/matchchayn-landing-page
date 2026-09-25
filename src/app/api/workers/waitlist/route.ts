import { NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { processWaitlistSignup } from "@/services/waitlist.service";

async function handler(request: Request) {
  try {
    const body = await request.json();
    const { name, email, gender, timestamp } = body;

    console.log(`[QStash Worker] Processing waitlist for: ${email}`);

    // Call the dedicated service that handles Google Sheets and Resend
    await processWaitlistSignup(name, email, gender, timestamp);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[QStash Worker Error]:", error);
    // Returning a 500 tells QStash that this task failed and needs to be retried
    return NextResponse.json({ error: "Failed to process task" }, { status: 500 });
  }
}

// Wrapping the handler ensures ONLY Upstash can call this URL
export const POST = verifySignatureAppRouter(handler);
