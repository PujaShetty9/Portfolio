import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  percent: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Skill", skillSchema);
