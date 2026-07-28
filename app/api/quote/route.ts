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

    const recipient = "contact@scholatech.com.ng";

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

    // 2. Email Dispatcher Strategy (Resend API)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const cleanPhone = phone.replace(/[^0-9]/g, "");
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Scholatech Lead <onboarding@resend.dev>",
            to: [recipient],
            subject: `[New Lead] ${school_name} - ${service_needed}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
                <h2 style="color: #3b82f6;">New School Lead Received</h2>
                <p><strong>Proprietor/Contact Name:</strong> ${name}</p>
                <p><strong>School Name:</strong> ${school_name}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/${cleanPhone}">${phone}</a></p>
                <p><strong>Primary Solution Needed:</strong> ${service_needed}</p>
                <p><strong>Message / Timeline:</strong> ${message || "N/A"}</p>
              </div>
            `,
          }),
        });
      } catch (mailErr) {
        console.error("Resend API error:", mailErr);
      }
    }

    // Strategy B: Webhook / Formspree Endpoint
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _replyto: email,
            _subject: `[Scholatech Lead] ${school_name} - ${service_needed}`,
            name,
            school_name,
            email,
            phone,
            service_needed,
            message,
            target_email: recipient,
          }),
        });
      } catch (whErr) {
        console.error("Webhook notification error:", whErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully.",
      target_email: recipient,
    });
  } catch (err: any) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Failed to process quote request." },
      { status: 500 }
    );
  }
}