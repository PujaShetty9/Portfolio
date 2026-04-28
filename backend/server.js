import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import projectRoutes from "./src/routes/projectRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors({
  origin: ["http://localhost:5173", "https://portfolio-hb03qayog-pujashetty92006-2194s-projects.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());

/* ---------------- MONGODB ---------------- */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

/* ---------------- ROUTES ---------------- */
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Portfolio CMS Backend Running");
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
