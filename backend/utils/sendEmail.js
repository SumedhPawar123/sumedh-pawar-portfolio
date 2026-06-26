const nodemailer = require('nodemailer')

exports.sendEmailNotification = async (contact) => {
    if(!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth : {
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