import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  gender: String,
  location: String,
  description: String,
  details: String,
  traits: [String],
  image: String
});

export default mongoose.model("Dog", dogSchema);
