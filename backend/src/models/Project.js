import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // image URL or path
      required: true,
    },
    tech: {
      type: [String], // ["React", "Node", "MongoDB"]
      required: true,
    },
    live: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
