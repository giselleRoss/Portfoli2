import dotenv from "dotenv";
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

dotenv.config();

export async function POST(req) {
    try {
        const fromEmail = process.env.FROM_EMAIL;
        const { email, name, subject, message } = await req.json();
        console.log(`Email: ${email.email} Subject: ${subject.subject} Message: ${message.message}`);

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: fromEmail,
                pass: process.env.MY_PASSWORD
            }
        });

        const mailOptions = {
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            html: `<h1>Hello ${name}</h1>
                <p>Thank you for reaching out! I will reply shortly.</p>
                <p>Subject: ${subject}</p>
                <p>${message}</p>`
        };

        await transport.sendMail(mailOptions);
        console.log("Email sent successfully");
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send Email" }, { status: 500 });
    }
}
