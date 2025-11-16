import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface NotificationEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  ctaLink?: string;
  ctaText?: string;
}

export const NotificationEmail = ({ 
  name, 
  email, 
  subject = 'Notification from Creavvy',
  message,
  ctaLink,
  ctaText
}: NotificationEmailProps) => {
  const previewText = subject;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <img
              src="https://creavvy.com/logo.png"
              width="120"
              height="36"
              alt="Creavvy"
            />
          </Section>
          <Heading style={h1}>{subject}</Heading>
          <Text style={text}>
            Hello {name || 'there'},
          </Text>
          {message && (
            <Text style={text}>
              {message}
            </Text>
          )}
          {ctaLink && ctaText && (
            <Section style={buttonContainer}>
              <Link href={ctaLink} style={button}>
                {ctaText}
              </Link>
            </Section>
          )}
          <Text style={text}>
            Best regards,<br />
            The Creavvy Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

NotificationEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Your project has been published!',
  message: 'Great news! Your project "Awesome Design" has been successfully published and is now live for everyone to see.',
  ctaLink: 'https://creavvy.com/projects/awesome-design',
  ctaText: 'View Project',
} as NotificationEmailProps;

export default NotificationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const logoContainer = {
  margin: '0 auto',
  padding: '20px 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
};

const buttonContainer = {
  margin: '24px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5e6ad2',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};