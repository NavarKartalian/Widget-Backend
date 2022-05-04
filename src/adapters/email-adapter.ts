export interface SendEmailData {
  subject: string;
  body: string;
}

export interface EmailAdapter {
  sendEmail: (email: SendEmailData) => Promise<void>;
}