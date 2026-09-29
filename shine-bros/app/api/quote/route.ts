import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// In-memory rate limit: max 3 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field; humans don't
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, email, service, address, message } = body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!phone || typeof phone !== "string" || phone.trim() === "") {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error: dbError } = await supabase.from("shine_bros_quotes").insert({
    name: String(name).trim(),
    phone: String(phone).trim(),
    email: email ? String(email).trim() : null,
    service: service ? String(service) : null,
    address: address ? String(address).trim() : null,
    message: message ? String(message).trim() : null,
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return NextResponse.json(
      { error: "Failed to save your request. Please try again." },
      { status: 500 }
    );
  }

  // Send email notification via Resend if configured
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "quotes@theshinebros.com",
          to: process.env.NOTIFY_EMAIL,
          subject: `New quote request from ${String(name).trim()}`,
          text: [
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Email: ${email ?? "not provided"}`,
            `Service: ${service ?? "not specified"}`,
            `Address: ${address ?? "not provided"}`,
            `Message: ${message ?? "none"}`,
          ].join("\n"),
        }),
      });
    } catch (emailErr) {
      // Non-fatal — log but don't fail the request
      console.error("Resend notification failed:", emailErr);
    }
  }

  return NextResponse.json({ ok: true });
}
