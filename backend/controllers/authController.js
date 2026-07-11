const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "eteon_jwt_secret_key_123";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "Visheshj865@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please provide email and password" });
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Sign JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });

    // Set cookie (7 days expiry)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(200).json({ success: true, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

exports.checkAuth = async (req, res) => {
  // If request reached here, the authenticateToken middleware passed
  res.status(200).json({ success: true, email: req.user.email });
};
