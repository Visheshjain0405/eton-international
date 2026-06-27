require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productController = require("./controllers/productController");
const inquiryController = require("./controllers/inquiryController");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Products
app.get("/api/products", productController.getProducts);
app.post("/api/products", productController.createProduct);
app.delete("/api/products/:id", productController.deleteProduct);

// Inquiries
app.get("/api/inquiries", inquiryController.getInquiries);
app.post("/api/inquiries", inquiryController.createInquiry);
app.patch("/api/inquiries/:id", inquiryController.updateInquiryStatus);
app.delete("/api/inquiries/:id", inquiryController.deleteInquiry);

// MongoDB connection
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/eteon_db";
mongoose.connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection failed: ", err.message);
  });
