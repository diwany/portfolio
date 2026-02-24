import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 * Handles contact form submissions.
 * In production, integrate with an email service (Resend, SendGrid, etc.)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Integration Point ──
    // Replace the console.log below with your preferred email service:
    //
    // Example with Resend:
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'portfolio@mohameddiwany.com',
    //     to: 'contact@mohameddiwany.com',
    //     subject: `Portfolio Contact: ${name}`,
    //     text: `From: ${name} (${email})\n\n${message}`,
    //   });
    //
    // Example with SendGrid:
    //   import sgMail from '@sendgrid/mail';
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //   await sgMail.send({ ... });

    console.log("📬 New contact form submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
