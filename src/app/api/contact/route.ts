import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST /api/contact
 * Handles contact form submissions and sends email via Resend.
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

    // Send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <contact@diwany.me>",
      to: "diwany@proton.me",
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      html: `
        <div style="background-color: #0a0a0a; padding: 40px 20px; font-family: 'Segoe UI', Arial, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto; background-color: #171717; border-radius: 16px; padding: 32px; border: 1px solid #262626;">
            <h2 style="color: #f5f5f5; font-size: 22px; margin: 0 0 24px 0; text-align: center;">
              New Contact <span style="color: #ef4444;">Message</span>
            </h2>

            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #dc2626; font-weight: 600; font-size: 13px; margin-bottom: 8px;">Your Name</label>
              <div style="background-color: #0a0a0a; border: 1px solid #262626; border-radius: 10px; padding: 14px 16px; color: #f5f5f5; font-size: 15px;">
                ${name}
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #dc2626; font-weight: 600; font-size: 13px; margin-bottom: 8px;">Your Email</label>
              <div style="background-color: #0a0a0a; border: 1px solid #262626; border-radius: 10px; padding: 14px 16px; color: #f5f5f5; font-size: 15px;">
                <a href="mailto:${email}" style="color: #f87171; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div style="margin-bottom: 8px;">
              <label style="display: block; color: #dc2626; font-weight: 600; font-size: 13px; margin-bottom: 8px;">Your Message</label>
              <div style="background-color: #0a0a0a; border: 1px solid #262626; border-radius: 10px; padding: 14px 16px; color: #f5f5f5; font-size: 15px; min-height: 100px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
        </div>
      `,
    });

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
