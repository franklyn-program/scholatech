import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, school_name, email, phone, service_needed, message, website_hp } = body;

    // Honeypot spam check
    if (website_hp) {
      return NextResponse.json({ success: true, message: "Request received." });
    }

    if (!name || !school_name || !email || !phone || !service_needed) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Insert into Supabase quote_requests table
    try {
      await supabase.from("quote_requests").insert([
        {
          name,
          school_name,
          email,
          phone,
          service_needed,
          message,
        },
      ]);
    } catch (dbErr) {
      console.warn("Supabase record warning:", dbErr);
    }

    // 2. Email Notification target: agboseakade1@gmail.com
    const recipient = "agboseakade1@gmail.com";

    // Check if RESEND_API_KEY environment variable is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Scholatech Studio <onboarding@resend.dev>",
            to: recipient,
            subject: `[New Quote Request] ${school_name} - ${service_needed}`,
            html: `
              <h2>New Quote Request Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>School Name:</strong> ${school_name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
              <p><strong>Service Requested:</strong> ${service_needed}</p>
              <p><strong>Message / Timeline:</strong> ${message || "N/A"}</p>
            `,
          }),
        });
      } catch (mailErr) {
        console.error("Email API notification error:", mailErr);
      }
    } else {
      console.log(`[Quote Notification Saved] Lead from ${school_name} for ${service_needed}. Recipient configured: ${recipient}`);
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully.",
      recipient: recipient,
    });
  } catch (err: any) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Failed to process quote request." },
      { status: 500 }
    );
  }
}
