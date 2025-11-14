// Simple script to test email functionality
import { sendMagicLinkEmail } from '../lib/email';
import { sendProjectPublishedNotification } from '../lib/notification';

async function testEmails() {
  console.log('Testing email functionality...');
  
  // Test magic link email
  console.log('Sending magic link email...');
  const magicLinkResult = await sendMagicLinkEmail(
    'test@example.com',
    'Test User',
    'https://creavvy.com/magic-link?token=abc123'
  );
  console.log('Magic link email result:', magicLinkResult);
  
  // Test notification email
  console.log('Sending notification email...');
  const notificationResult = await sendProjectPublishedNotification(
    'test@example.com',
    'Test User',
    'Test Project',
    'https://creavvy.com/projects/test-project'
  );
  console.log('Notification email result:', notificationResult);
  
  console.log('Email testing completed.');
}

// Run the test if this file is executed directly
if (require.main === module) {
  testEmails().catch(console.error);
}