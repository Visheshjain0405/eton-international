const nodemailer = require("nodemailer");

const sendInquiryEmail = async (inquiry) => {
  // If credentials are placeholders or empty, log only to prevent crashes
  if (!process.env.SMTP_USER || process.env.SMTP_USER.includes("your_email")) {
    console.log("SMTP not configured. Skipping email send. Inquiry details: ", inquiry);
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: parseInt(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Eteon Notification" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Inquiry Received: ${inquiry.interest || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #2b6cb0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Client Inquiry</h2>
          <p><strong>Inquiry ID:</strong> ${inquiry.id}</p>
          <p><strong>Name:</strong> ${inquiry.name}</p>
          <p><strong>Company:</strong> ${inquiry.company || "N/A"}</p>
          <p><strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
          <p><strong>Phone:</strong> ${inquiry.phone || "N/A"}</p>
          <p><strong>Product Interest:</strong> ${inquiry.interest || "General"}</p>
          <p style="margin-top: 20px; padding: 10px; background-color: #f7fafc; border-left: 4px solid #2b6cb0;">
            Please log into the Eteon Admin Control Panel to manage this lead and mark updates.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: ", info.messageId);
  } catch (error) {
    console.error("Nodemailer Email dispatch failed: ", error);
  }
};

module.exports = { sendInquiryEmail };
