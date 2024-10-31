'use server';

import nodemailer from 'nodemailer';

export const sendEmail = async (
  to: string,
  subject: string,
  message: string,
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +(process.env.SMTP_PORT ?? 0),
    secure: true,
    tls: { ciphers: 'SSLv3' },
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.SMTP_USERNAME,
    to,
    subject,
    html: message,
  });
};
