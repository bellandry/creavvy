import { sendWelcomeEmail } from '@/lib/email';
import prisma from '@/lib/prisma';

// Send welcome email to new users
export const sendWelcomeEmailToUser = async (userId: string) => {
  try {
    // Fetch user details
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true, name: true }
    });

    if (!user || !user.email) {
      console.error('User not found or email missing');
      return { success: false, error: 'User not found or email missing' };
    }

    // Send welcome email
    const result = await sendWelcomeEmail(user.email, user.name || undefined);
    return result;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};