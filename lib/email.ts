import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { MagicLinkEmail } from '../emails/templates/MagicLinkEmail';
import { WelcomeEmail } from '../emails/templates/WelcomeEmail';
import { NotificationEmail } from '../emails/templates/NotificationEmail';

// Create a transporter using SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send magic link email
export const sendMagicLinkEmail = async (
  email: string,
  name: string | undefined,
  magicLink: string
) => {
  const transporter = createTransporter();
  
  const emailHtml = await render(
    MagicLinkEmail({
      name,
      email,
      magicLink,
    })
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Your Magic Link to Access Creavvy',
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions) as { messageId?: string };
    console.log('Magic link email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending magic link email:', error);
    return { success: false, error };
  }
};

// Send welcome email
export const sendWelcomeEmail = async (
  email: string,
  name: string | undefined
) => {
  const transporter = createTransporter();
  
  const emailHtml = await render(
    WelcomeEmail({
      name,
      email,
    })
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Welcome to Creavvy!',
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions) as { messageId?: string };
    console.log('Welcome email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};

// Send notification email
export const sendNotificationEmail = async (
  email: string,
  name: string | undefined,
  subject: string,
  message: string,
  ctaLink?: string,
  ctaText?: string
) => {
  const transporter = createTransporter();
  
  const emailHtml = await render(
    NotificationEmail({
      name,
      email,
      subject,
      message,
      ctaLink,
      ctaText,
    })
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject,
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions) as { messageId?: string };
    console.log('Notification email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending notification email:', error);
    return { success: false, error };
  }
};