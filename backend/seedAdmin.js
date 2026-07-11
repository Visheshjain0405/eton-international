require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const run = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }
    console.log("Connecting to database...");
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB successfully");

    const email = "info@eteoninternational.com";
    const password = "Eteoninternational@1234";

    // Delete existing admin if any to avoid duplication
    await User.deleteMany({ email });

    const user = new User({ email, password });
    await user.save();
    console.log(`Successfully registered user: ${email} with password: ${password}`);

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (err) {
    console.error("Error seeding admin user:", err);
  }
};

run();
