require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/Product");

// Helper to load ES6 export files in CommonJS
const loadES6Data = (filePath, exportName) => {
  const content = fs.readFileSync(filePath, "utf-8");
  // Replace ES6 export with CommonJS export
  const tempContent = content
    .replace(/import\s+.*\s+from\s+['"].*['"];?/g, "") // remove imports
    .replace(`export const ${exportName}`, "module.exports");
  
  const tempPath = path.join(__dirname, `temp_${exportName}.js`);
  fs.writeFileSync(tempPath, tempContent);
  const data = require(tempPath);
  fs.unlinkSync(tempPath);
  return data;
};

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/eteon_db";
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB for seeding");

    // Clean existing catalog
    await Product.deleteMany({});
    console.log("Cleared existing products from database");

    // Load data from admin's data folder
    const dataDir = path.join(__dirname, "../admin/src/data");
    const packaging = loadES6Data(path.join(dataDir, "packaging.js"), "packagingProducts");
    const organic = loadES6Data(path.join(dataDir, "organic_fertilizer.js"), "organicFertilizerProducts");
    const medical = loadES6Data(path.join(dataDir, "medical.js"), "medicalProducts");

    const allProducts = [...packaging, ...organic, ...medical];
    
    // Format and insert products
    const formattedProducts = allProducts.map((p, index) => ({
      id: p.id ? String(p.id) : `PROD-${String(index + 101)}`,
      slug: p.slug,
      name: p.name,
      category: p.category,
      image: p.image || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      desc: p.desc || p.description || "",
      description: p.description || "",
      longDescription: p.longDescription || "",
      highlights: p.highlights || [],
      specs: p.specs || [],
      features: p.features || []
    }));

    await Product.insertMany(formattedProducts);
    console.log(`Successfully seeded ${formattedProducts.length} products to database!`);
    
    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Seeding failed: ", error);
  }
};

seedDatabase();
