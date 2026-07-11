require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const productController = require("./controllers/productController");
const inquiryController = require("./controllers/inquiryController");
const authController = require("./controllers/authController");
const authenticateToken = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cookieParser());

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(",") 
  : ["http://localhost:3000", "http://localhost:3001"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Routes
// Authentication
app.post("/api/auth/login", authController.login);
app.post("/api/auth/logout", authController.logout);
app.get("/api/auth/me", authenticateToken, authController.checkAuth);

// Products
app.get("/api/products", productController.getProducts);
app.post("/api/products", authenticateToken, productController.createProduct);
app.get("/api/products/slug/:slug", productController.getProductBySlug);
app.delete("/api/products/:id", authenticateToken, productController.deleteProduct);

// Inquiries
app.get("/api/inquiries", authenticateToken, inquiryController.getInquiries);
app.post("/api/inquiries", inquiryController.createInquiry); // Frontend submits new inquiries, so public
app.patch("/api/inquiries/:id", authenticateToken, inquiryController.updateInquiryStatus);
app.delete("/api/inquiries/:id", authenticateToken, inquiryController.deleteInquiry);

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
