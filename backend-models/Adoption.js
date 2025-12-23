import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,

    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,

    residenceType: String,
    ownOrRent: String,
    familyMembers: Number,
    children: Number,
    otherPets: Number,

    reason: String,
    caregiver: String,
    vetContact: String,

    signature: String // base64 string
  },
  { timestamps: true }
);

export default mongoose.model("Adoption", adoptionSchema);
