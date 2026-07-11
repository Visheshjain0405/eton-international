const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "eteon_jwt_secret_key_123";

const authenticateToken = (req, res, next) => {
  // Read token from cookies
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "Access denied. No session token found." });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ error: "Session expired or invalid token." });
  }
};

module.exports = authenticateToken;
