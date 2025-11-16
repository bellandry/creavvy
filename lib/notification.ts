import { sendNotificationEmail } from '@/lib/email';

// Send a generic notification email
export const sendNotification = async (
  email: string,
  name: string | undefined,
  subject: string,
  message: string,
  ctaLink?: string,
  ctaText?: string
) => {
  try {
    const result = await sendNotificationEmail(
      email,
      name,
      subject,
      message,
      ctaLink,
      ctaText
    );
    return result;
  } catch (error) {
    console.error('Error sending notification email:', error);
    return { success: false, error };
  }
};

// Example: Send project published notification
export const sendProjectPublishedNotification = async (
  email: string,
  name: string | undefined,
  projectName: string,
  projectLink: string
) => {
  const subject = 'Your project has been published!';
  const message = `Great news! Your project "${projectName}" has been successfully published and is now live for everyone to see.`;
  
  return await sendNotification(
    email,
    name,
    subject,
    message,
    projectLink,
    'View Project'
  );
};

// Example: Send account verification notification
export const sendAccountVerificationNotification = async (
  email: string,
  name: string | undefined
) => {
  const subject = 'Account Verified Successfully';
  const message = 'Your account has been successfully verified. You now have full access to all features of Creavvy.';
  
  return await sendNotification(
    email,
    name,
    subject,
    message
  );
};