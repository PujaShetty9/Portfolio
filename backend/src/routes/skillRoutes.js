import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

/* ================= GET ALL SKILLS ================= */
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= ADD SKILL ================= */
router.post("/", async (req, res) => {
  try {
    const { name, category, percent } = req.body;

    if (!name || !category || percent === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSkill = new Skill({
      name,
      category,
      percent: Number(percent) // ✅ ensure number
    });

    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* ================= UPDATE SKILL ================= */
router.put("/:id", async (req, res) => {
  try {
    const { name, category, percent } = req.body;

    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      {
        name,
        category,
        percent: Number(percent)
      },
      { new: true } // return updated document
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json(updatedSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* ================= DELETE SKILL ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
