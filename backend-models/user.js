import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["adopter", "member"], default: "adopter" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
