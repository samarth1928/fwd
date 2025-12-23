import express from "express";
import Dog from "../models/Dog.js";

const router = express.Router();

/* GET ALL DOGS */
router.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch dogs" });
  }
});

export default router;

