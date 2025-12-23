import express from "express";
import Adoption from "../models/Adoption.js";

const router = express.Router();

/* SUBMIT ADOPTION FORM */
router.post("/", async (req, res) => {
  try {
    await Adoption.create(req.body);
    res.status(201).json({ message: "Adoption application submitted" });
  } catch (error) {
    res.status(400).json({ message: "Submission failed" });
  }
});

export default router;
