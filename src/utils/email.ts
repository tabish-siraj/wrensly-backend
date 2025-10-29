import logger from './logger';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async (options: EmailOptions) => {
  try {
    const MJ_APIKEY_PUBLIC = process.env.MJ_APIKEY_PUBLIC;
    const MJ_APIKEY_PRIVATE = process.env.MJ_APIKEY_PRIVATE;
    const fromEmail = process.env.MAILJET_FROM_EMAIL;

    if (!MJ_APIKEY_PUBLIC || !MJ_APIKEY_PRIVATE || !fromEmail) {
      throw new Error(
        'Mailjet API keys or FROM email are not defined in environment variables.'
      );
    }

    const body = {
      Messages: [
        {
          From: {
            Email: fromEmail,
            Name: 'Wrensly',
          },
          To: [
            {
              Email: options.to,
            },
          ],
          Subject: options.subject,
          HTMLPart: options.html,
        },
      ],
    };

    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' +
          Buffer.from(MJ_APIKEY_PUBLIC + ':' + MJ_APIKEY_PRIVATE).toString(
            'base64'
          ),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(`Failed to send email: ${JSON.stringify(data)}`);
    }

    logger.info(`Email sent to ${options.to}`);
  } catch (error) {
    logger.error(`Error sending email to ${options.to}: ${error}`);
    throw new Error('Error sending email');
  }
};

export const sendPasswordResetEmail = async (
  first_name: string,
  email: string,
  token: string
) => {
  const resetUrl = `${process.env.APP_URL}/auth/reset-password?token=${token}`;
  const html = `
    <p>Hi, ${first_name}</p>
    <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
    <a href="${resetUrl}">${resetUrl}</a>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
  `;
  await sendEmail({ to: email, subject: 'Password Reset', html });
};

export const sendEmailVerificationEmail = async (
  username: string,
  email: string,
  token: string,
  resend = false
) => {
  const verificationUrl = `${process.env.APP_URL}/auth/verify-email?token=${token}`;
  let subject = 'Verify your email address';
  if (resend) {
    subject = 'Resend: Verify your email address';
  }
  let html = `
    <p>Hi, @${username}</p>
    <p>Thanks for signing up to Wrensly! Please verify your email address by clicking the link below:</p>
    <a href="${verificationUrl}">${verificationUrl}</a>
  `;
  if (resend) {
    html += `<p>This is a resend of the verification email.</p>`;
  }
  await sendEmail({ to: email, subject, html });
};
