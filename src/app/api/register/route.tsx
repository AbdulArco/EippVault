import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type tContactRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

// name

export async function POST(req: Request) {
  try {
    const data: tContactRequestBody = await req.json();
    const { firstName, lastName, email, phone, message } = data;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 30px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
          <div style="background-color: #0066b3; color: #fff; padding: 18px 25px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Register Message EIPP Vault</h2>
          </div>
          <div style="padding: 25px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="font-weight:bold; padding:8px;">First Name:</td><td>${firstName}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Last Name:</td><td>${lastName}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Email:</td><td>${email}</td></tr>
              <tr><td style="font-weight:bold; padding:8px;">Phone:</td><td>${
                phone || "N/A"
              }</td></tr>
              <tr><td style="font-weight:bold; padding:8px; vertical-align:top;">Message:</td><td>${message}</td></tr>
            </table>
            <p style="margin-top:25px; font-size:13px; color:#666;">This message was sent from eipp vault register form.</p>
          </div>
          <div style="background-color:#f3f4f6; padding:15px; text-align:center; font-size:13px; color:#777;">
            <p style="margin:0;">EIPP Vault — Chennai, India</p>
            <a href="https://eippvault.com" style="color:#0066b3; text-decoration:none;">www.eippvault.com</a>
          </div>
        </div>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.socketlabs.com",
      port: 587,
      //secure: true`
      secure: false,
      auth: {
        user: "server37848",
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: "info@eippvault.com",
      to: "info@eippvault.com",
      replyTo: email,
      subject: "New Register Message",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
