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

interface MagicLinkEmailProps {
  name?: string;
  email?: string;
  magicLink?: string;
}

export const MagicLinkEmail = ({ name, email, magicLink }: MagicLinkEmailProps) => {
  const previewText = `Your magic link to access Creavvy`;

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
          <Heading style={h1}>Your Magic Link</Heading>
          <Text style={text}>
            Hello {name || 'there'},
          </Text>
          <Text style={text}>
            We received a request for a magic link to access your Creavvy account.
          </Text>
          <Section style={buttonContainer}>
            <Link href={magicLink} style={button}>
              Login to Creavvy
            </Link>
          </Section>
          <Text style={text}>
            This link will expire in 1 hour. If you didn&#39;t request this link, you can safely ignore this email.
          </Text>
          <Text style={text}>
            Best regards,<br />
            The Creavvy Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

MagicLinkEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john@example.com',
  magicLink: 'https://creavvy.com/magic-link?token=abc123',
} as MagicLinkEmailProps;

export default MagicLinkEmail;

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