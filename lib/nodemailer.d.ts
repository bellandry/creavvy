declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: unknown): Promise<unknown>;
    close(): void;
  }

  export function createTransport(options: unknown): Transporter;
  
  export interface SendMailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    attachments?: unknown[];
  }
}