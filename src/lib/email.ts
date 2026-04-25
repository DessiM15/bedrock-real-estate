import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendNotificationEmail(data: ContactEmailData) {
  const resend = getResendClient();
  if (!resend) {
    console.log("Resend API key not configured. Skipping notification email.");
    return;
  }

  const notificationEmail =
    process.env.NOTIFICATION_EMAIL || "david@financialfreedom-inc.net";

  await resend.emails.send({
    from: "Bedrock Financial Planning <onboarding@resend.dev>",
    to: notificationEmail,
    subject: `New Investment Inquiry from ${data.name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FFFDF7; padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #A38D6D;">
          <h1 style="color: #0B2412; font-size: 24px; margin: 0;">New Investment Inquiry</h1>
          <p style="color: #A38D6D; margin: 5px 0 0;">Bedrock Financial Planning</p>
        </div>

        <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #F5F0E8;">
          <h2 style="color: #0B2412; font-size: 18px; margin-top: 0;">Contact Details</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #8A7558; font-weight: 600; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 10px 0; color: #0B2412;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A7558; font-weight: 600; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0; color: #0B2412;">
                <a href="mailto:${data.email}" style="color: #A38D6D;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A7558; font-weight: 600; vertical-align: top;">Phone:</td>
              <td style="padding: 10px 0; color: #0B2412;">
                <a href="tel:${data.phone}" style="color: #A38D6D;">${data.phone}</a>
              </td>
            </tr>
            ${
              data.message
                ? `
            <tr>
              <td style="padding: 10px 0; color: #8A7558; font-weight: 600; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #0B2412;">${data.message}</td>
            </tr>`
                : ""
            }
          </table>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #F5F0E8;">
          <p style="color: #8A7558; font-size: 13px; margin: 0;">This inquiry was submitted through the Bedrock Financial Planning website.</p>
        </div>
      </div>
    `,
  });
}

export async function sendConfirmationEmail(data: ContactEmailData) {
  const resend = getResendClient();
  if (!resend) {
    console.log("Resend API key not configured. Skipping confirmation email.");
    return;
  }

  await resend.emails.send({
    from: "Bedrock Financial Planning <onboarding@resend.dev>",
    to: data.email,
    subject: "Thank You for Your Interest — Bedrock Financial Planning",
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FFFDF7; padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #A38D6D;">
          <h1 style="color: #0B2412; font-size: 24px; margin: 0;">Thank You, ${data.name}</h1>
          <p style="color: #A38D6D; margin: 5px 0 0;">Bedrock Financial Planning</p>
        </div>

        <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #F5F0E8;">
          <p style="color: #0B2412; line-height: 1.7; margin-top: 0;">
            Thank you for reaching out to Bedrock Financial Planning. We've received your inquiry and a member of our team will be in touch within one business day to schedule your complimentary investment evaluation.
          </p>

          <p style="color: #0B2412; line-height: 1.7;">
            In the meantime, if you have any immediate questions, feel free to call us directly at
            <a href="tel:7199302059" style="color: #A38D6D; font-weight: 600;">719-930-2059</a>.
          </p>

          <p style="color: #0B2412; line-height: 1.7;">
            We look forward to helping you explore high-yield, secured alternative real estate investment opportunities.
          </p>

          <p style="color: #0B2412; line-height: 1.7; margin-bottom: 0;">
            Warm regards,<br>
            <strong>The Bedrock Financial Planning Team</strong>
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #F5F0E8;">
          <p style="color: #8A7558; font-size: 13px; margin: 0 0 5px;">
            Bedrock Financial Planning<br>
            15770 Old Conroe Road, Conroe, TX 77384<br>
            <a href="tel:7199302059" style="color: #A38D6D;">719-930-2059</a>
          </p>
          <p style="color: #C4B293; font-size: 11px; margin: 10px 0 0;">
            All material presented herein is intended for information purposes only.
          </p>
        </div>
      </div>
    `,
  });
}
