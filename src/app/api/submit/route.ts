import { NextRequest, NextResponse } from "next/server";
import { orgEmail } from "@/lib/constants";

const FORM_LABELS: Record<string, string> = {
  join: "Join the Community",
  opportunity: "Submit an Opportunity",
  newcomerIntake: "Newcomer Intake",
  mentor: "Mentor Request",
  businessListing: "Business Listing",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  let body: {
    formType?: string;
    fields?: Record<string, string>;
    labels?: Record<string, string>;
    honeypot?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { formType, fields, labels, honeypot } = body;

  // Silently accept-and-drop bot submissions caught by the honeypot.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!formType || !FORM_LABELS[formType]) {
    return NextResponse.json({ error: "invalid_form_type" }, { status: 400 });
  }

  const name = fields?.name?.trim();
  const email = fields?.email?.trim();

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "missing_required_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  const rows = Object.entries(fields ?? {})
    .filter(([, value]) => value && value.trim())
    .map(([key, value]) => {
      const label = labels?.[key] || key;
      return `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top;white-space:nowrap">${escapeHtml(
        label
      )}</td><td style="padding:4px 0">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`;
    })
    .join("");

  const from = process.env.RESEND_FROM_EMAIL || "Togo Rising <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [orgEmail],
        reply_to: email,
        subject: `[Togo Rising] ${FORM_LABELS[formType]}: ${name}`,
        html: `<table>${rows}</table>`,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend error:", res.status, errorText);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend request failed:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
