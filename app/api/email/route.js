import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, organization, service, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_RECEIVER,
    subject: `Message from ${name} on The 0xDeenode Website`,
    text: `Hello! You've received a new message from 0xdeeznode Contact form. This one is from → ${name}; email: ${email}`,
    html: `
    <h4>New Message from 0xDeeznode.com </h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Organization: ${organization}</li>
        <li>Service: ${service}</li>
    </ul>
    <h4>Message:</h4>
    <p>${message}</p>
    `,
  };

  const sendMailPromise = () => {
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          console.error('Error sending email:', err);
          reject('Failed to send email');
        }
      });
    });
  };


  try {
    await sendMailPromise();
    return NextResponse.json({ success: true, message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}