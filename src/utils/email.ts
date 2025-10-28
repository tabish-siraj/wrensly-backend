import { Resend } from 'resend';
import logger from './logger';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async (options: EmailOptions) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const response = await resend.emails.send({
      from: '"Wrensly" <onboarding@resend.dev>',
      ...options,
    });
    logger.info(`Email sent to ${options.to}: ${response.data?.id}`);
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
  token: string
) => {
  const verificationUrl = `${process.env.APP_URL}/auth/verify-email?token=${token}`;
  const html = `
    <p>Hi, @${username}</p>
    <p>Thanks for signing up to Wrensly! Please verify your email address by clicking the link below:</p>
    <a href="${verificationUrl}">${verificationUrl}</a>
  `;
  await sendEmail({ to: email, subject: 'Verify your email address', html });
};
