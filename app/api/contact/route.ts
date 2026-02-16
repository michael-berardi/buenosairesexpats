import { NextRequest, NextResponse } from "next/server";

// Force static export for this API route
export const dynamic = "force-static";

// Contact form API endpoint
// In production, configure with your email service:
// Options: Resend, SendGrid, AWS SES, or email forwarding service

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@buenosairesexpats.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@buenosairesexpats.com";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  // Basic XSS prevention
  return input
    .replace(/[<>]/g, "")
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as ContactFormData;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (subject.length < 3 || subject.length > 200) {
      return NextResponse.json(
        { error: "Subject must be between 3 and 200 characters" },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Log the contact form submission (for development)
    console.log("Contact form submission:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service
    // Examples:
    // 
    // Using Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: FROM_EMAIL,
    //   to: CONTACT_EMAIL,
    //   subject: `Contact Form: ${sanitizedData.subject}`,
    //   html: `<p><strong>From:</strong> ${sanitizedData.name} (${sanitizedData.email})</p>
    //          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>`,
    // });
    //
    // Using SendGrid:
    // import sgMail from '@sendgrid/mail';
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   from: FROM_EMAIL,
    //   to: CONTACT_EMAIL,
    //   subject: `Contact Form: ${sanitizedData.subject}`,
    //   text: `From: ${sanitizedData.name} (${sanitizedData.email})\n\n${sanitizedData.message}`,
    // });

    // For now, simulate success
    // In production, uncomment the email service integration above

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon!" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// Rate limiting could be added here
// Consider using Upstash Redis or similar for production rate limiting
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
