const Inquiry = require("../models/Inquiry");
const { sendInquiryEmail, sendThankYouEmail } = require("../utils/mailer");

// Get all inquiries
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new inquiry (Front-facing contact form)
exports.createInquiry = async (req, res) => {
  try {
    const { name, company, email, phone, interest } = req.body;
    
    // Auto-generate inquiry ID
    const count = await Inquiry.countDocuments();
    const id = `INQ-${String(count + 101).padStart(3, "0")}`;

    const newInquiry = new Inquiry({
      id,
      name,
      company,
      email,
      phone,
      interest,
      status: "Pending"
    });

    const savedInquiry = await newInquiry.save();

    // Trigger Nodemailer dispatch
    await sendInquiryEmail(savedInquiry);
    await sendThankYouEmail(savedInquiry);

    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update inquiry status
exports.updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedInquiry = await Inquiry.findOneAndUpdate(
      { id },
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedInquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.status(200).json(updatedInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete inquiry
exports.deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInquiry = await Inquiry.findOneAndDelete({ id });
    if (!deletedInquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }
    res.status(200).json({ message: "Inquiry deleted successfully", id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


