const nodemailer = require('nodemailer')

exports.sendEmailNotification = async (contact) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `New Portfolio Message: ${contact.subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Message</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight:bold;">Name:</td><td>${contact.name}</td></tr>
          <tr><td style="padding: 8px; font-weight:bold;">Email:</td><td>${contact.email}</td></tr>
          <tr><td style="padding: 8px; font-weight:bold;">Subject:</td><td>${contact.subject}</td></tr>
          <tr><td style="padding: 8px; font-weight:bold;">Message:</td><td>${contact.message}</td></tr>
          <tr><td style="padding: 8px; font-weight:bold;">Date:</td><td>${new Date().toLocaleString()}</td></tr>
        </table>
      </div>
    `
  });
}


exports.sendAutoReply = async (contact) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Sumedh Pawar" <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: "✨ Thank you for contacting me!",
    html: `
      <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 15px;">

        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:40px;text-align:center;color:white;">
              <h1 style="margin:0;font-size:32px;">Thank You! 🎉</h1>
              <p style="margin-top:12px;font-size:18px;">
                Your message has been received successfully.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;color:#333;">

              <h2 style="margin-top:0;">
                Hi ${contact.name},
              </h2>

              <p style="font-size:16px;line-height:1.8;">
                Thank you for reaching out through my portfolio website.
                I truly appreciate your interest.
              </p>

              <p style="font-size:16px;line-height:1.8;">
                I've successfully received your message and will review it carefully.
                You can expect a response from me within
                <strong>24-48 hours</strong>.
              </p>

              <div style="background:#f8fafc;border-left:5px solid #4f46e5;padding:20px;border-radius:8px;margin:30px 0;">

                <h3 style="margin-top:0;color:#4f46e5;">
                  📩 Your Message Summary
                </h3>

                <p><strong>Subject:</strong> ${contact.subject}</p>

                <p>
                  <strong>Message:</strong><br>
                  ${contact.message}
                </p>

              </div>

              <p style="font-size:16px;line-height:1.8;">
                In the meantime, feel free to explore more of my work and connect
                with me on LinkedIn or GitHub.
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:30px auto;">
                <tr>
                  <td align="center" bgcolor="#4f46e5" style="border-radius:8px;">
                    <a href="https://yourportfolio.com"
                      style="display:inline-block;padding:14px 28px;color:white;text-decoration:none;font-weight:bold;">
                      Visit My Portfolio
                    </a>
                  </td>
                </tr>
              </table>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:35px 0;">

              <p style="margin-bottom:0;">
                Best Regards,<br><br>

                <strong style="font-size:18px;">Sumedh Pawar</strong><br>

                MERN Stack Developer
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:25px;text-align:center;color:#777;font-size:13px;">

              This is an automated confirmation email.<br>

              Please do not reply directly to this email.

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
    `,
  });
};