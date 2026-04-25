import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";

const rateLimitMap = new Map<string, number>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 1 submission per minute per IP
    const key = getRateLimitKey(request);
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(key);

    if (lastSubmission && now - lastSubmission < 60000) {
      return NextResponse.json(
        { error: "Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Update rate limit
    rateLimitMap.set(key, now);

    // Clean up old entries periodically
    if (rateLimitMap.size > 1000) {
      for (const [k, v] of rateLimitMap.entries()) {
        if (now - v > 300000) {
          rateLimitMap.delete(k);
        }
      }
    }

    // Send emails (don't fail the request if email fails in dev)
    try {
      await Promise.all([
        sendNotificationEmail(data),
        sendConfirmationEmail(data),
      ]);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // In production, you might want to still return success
      // since the lead was captured, but log the email failure
    }

    return NextResponse.json(
      { message: "Thank you for your inquiry. We'll be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
