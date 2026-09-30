import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { data } from "@/utils/data/home-page/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isText = (value: unknown, maxLength: number): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;

export async function POST(req: Request) {
  try {
    const body: Record<string, unknown> = await req.json();
    const { name, email, services, mobile, message } = body;

    const isValid =
      isText(name, 100) &&
      isText(email, 150) &&
      EMAIL_PATTERN.test(email) &&
      isText(services, 100) &&
      data.service.includes(services) &&
      isText(mobile, 20) &&
      isText(message, 2000);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${services}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Service: ${services}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
