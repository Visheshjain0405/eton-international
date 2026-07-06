const nodemailer = require("nodemailer");

const sendInquiryEmail = async (inquiry) => {
  // If credentials are placeholders or empty, log only to prevent crashes
  if (!process.env.SMTP_USER || process.env.SMTP_USER.includes("your_email")) {
    console.log("SMTP not configured. Skipping email send. Inquiry details: ", inquiry);
    return;
  }

  try {
    console.log({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  passwordLoaded: !!process.env.SMTP_PASS,
});
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
console.log("SMTP verified successfully");

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

const sendThankYouEmail = async (inquiry) => {
  if (!process.env.SMTP_USER || process.env.SMTP_USER.includes("your_email")) {
    console.log("SMTP not configured. Skipping thank you email send.");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP verified successfully for thank you email");

    const mailOptions = {
      from: `"Eteon International" <${process.env.SMTP_USER}>`,
      to: inquiry.email,
      subject: `Thank you for contacting Eteon International!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2b6cb0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Thank You for Your Inquiry</h2>
          <p>Dear <strong>${inquiry.name}</strong>,</p>
          <p>Thank you for reaching out to Eteon International. We have successfully received your inquiry regarding <strong>${inquiry.interest || "our products/services"}</strong>.</p>
          <p>Our team is currently reviewing your request (Inquiry ID: <strong>${inquiry.id}</strong>) and will get back to you as soon as possible, typically within 24 business hours.</p>
          <p style="margin-top: 20px; padding: 10px; background-color: #f7fafc; border-left: 4px solid #2b6cb0;">
            <strong>Your details registered with us:</strong><br/>
            Email: ${inquiry.email}<br/>
            ${inquiry.company ? `Company: ${inquiry.company}<br/>` : ""}
            ${inquiry.phone ? `Phone: ${inquiry.phone}<br/>` : ""}
          </p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 0.9em; color: #718096;">
            This is an automated confirmation of your request. Please do not reply directly to this email.
          </p>
          <p style="font-size: 0.9em; color: #2b6cb0; font-weight: bold;">
            Eteon International Team
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Thank you email sent successfully: ", info.messageId);
  } catch (error) {
    console.error("Nodemailer Thank you email dispatch failed: ", error);
  }
};

module.exports = { sendInquiryEmail, sendThankYouEmail };
