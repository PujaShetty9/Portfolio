import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// CREATE
router.post("/", async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

export default router;
