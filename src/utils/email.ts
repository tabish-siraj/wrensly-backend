import { Resend } from 'resend';
import logger from './logger';

// export const sendPasswordResetEmail = async (email: string, token: string) => {
//   try {
//     const resetUrl = `http://localhost:3000/reset-password?token=${token}`;
//     const mailOptions = {
//       from: '"Wrensly" <noreply@wrensly.com>',
//       to: email,
//       subject: 'Password Reset',
//       html: `
//         <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
//         <p>Please click on the following link, or paste this into your browser to complete the process:</p>
//         <a href="${resetUrl}">${resetUrl}</a>
//         <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     logger.info(
//       `Password reset email sent to ${email}: ${nodemailer.getTestMessageUrl(info)}`
//     );
//   } catch (error) {
//     logger.error(`Error sending password reset email to ${email}: ${error}`);
//     throw new Error('Error sending password reset email');
//   }
// };

export const sendPasswordResetEmail = async (
  first_name: string,
  email: string,
  token: string
) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const resetUrl = `${process.env.APP_URL}/reset-password?token=${token}`;

    const response = await resend.emails.send({
      from: '"Wrensly" <onboarding@resend.dev>',
      to: email,
      subject: 'Password Reset',
      html: `
        <p>Hi, ${first_name}</p>
        <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
        <p>Please click on the following link, or paste this into your browser to complete the process:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
      `,
    });

    logger.info(`Password reset email sent to ${email}: ${response.data?.id}`);
  } catch (error) {
    logger.error(`Error sending password reset email to ${email}: ${error}`);
    throw new Error('Error sending password reset email');
  }
};
