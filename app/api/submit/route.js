import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connect } from "../../src/dbconfig/dbconfig"; // MongoDB config
import User from "../../src/models/Demoform"; // Mongoose model

export async function POST(req) {
  try {
    await connect();
    const { name, email, phone, message } = await req.json();

    // Save in MongoDB
    const newUser = new User({ name, email, phone, message });
    await newUser.save();

    // Gmail SMTP (use App Password in .env)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Demo Request",
      html: `
    <h2 style="font-size: 24px; color: #4CAF50; font-family: Arial, sans-serif;">New Demo Request</h2>

<p style="font-size: 16px; color: #333; font-family: Arial, sans-serif;">
  <strong style="color: #007BFF;">Name:</strong> ${name}
</p>

<p style="font-size: 16px; color: #333; font-family: Arial, sans-serif;">
  <strong style="color: #007BFF;">Email:</strong> ${email}
</p>

<p style="font-size: 16px; color: #333; font-family: Arial, sans-serif;">
  <strong style="color: #007BFF;">Phone:</strong> ${phone}
</p>

<p style="font-size: 16px; color: #333; font-family: Arial, sans-serif;">
  <strong style="color: #007BFF;">Message:</strong><br/>
  <span style="color: #555;">${message}</span>
</p>

<hr style="border: 1px solid #ddd; margin-top: 20px; margin-bottom: 20px;"/>

<p style="font-size: 14px; color: #888; font-family: Arial, sans-serif;">
  <small>This is an automated message. Please do not reply.</small>
</p>

<div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f4f4f4; border-radius: 5px;">
  <p style="font-size: 14px; color: #888; font-family: Arial, sans-serif;">
    <strong>Thank you for your request! We'll get back to you soon.</strong>
  </p>
</div>

      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Form submitted and email sent!" });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
