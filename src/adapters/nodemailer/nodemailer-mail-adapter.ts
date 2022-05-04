import nodemailer from 'nodemailer';
import { EmailAdapter, SendEmailData } from "../email-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "04faf0d490e161",
    pass: "5c51520dee89a0"
  }
});

export class NodemailerMailAdapter implements EmailAdapter {
  async sendEmail({ body, subject }: SendEmailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Navar Kartalian <navarprogrammer@gmail.com>',
    subject,
    html: body,
  });
  }
}