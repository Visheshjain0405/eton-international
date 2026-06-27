const mongoose = require("mongoose");

const SpecSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });

const FeatureSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
  icon: { type: String }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  description: { type: String },
  longDescription: { type: String },
  highlights: [{ type: String }],
  specs: [SpecSchema],
  features: [FeatureSchema],
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
