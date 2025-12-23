import mongoose from "mongoose";
import dotenv from "dotenv";
import Dog from "./models/Dog.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Dog.deleteMany(); // ⚠️ clears old dogs (recommended)

await Dog.insertMany([
  {
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    location: "Bengaluru",
    description: "Friendly and energetic",
    details: "Loves kids and outdoor play",
    traits: ["Friendly", "Active", "Loyal"],
    image: "https://placedog.net/500"
  },
  {
    name: "Luna",
    breed: "Labrador",
    age: "1 year",
    gender: "Female",
    location: "Mumbai",
    description: "Calm and affectionate",
    details: "Perfect apartment dog",
    traits: ["Calm", "Affectionate"],
    image: "https://placedog.net/501"
  },
  {
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    gender: "Male",
    location: "Delhi",
    description: "Protective and loyal",
    details: "Well trained guard dog",
    traits: ["Loyal", "Alert"],
    image: "https://placedog.net/502"
  },
  {
    name: "Bella",
    breed: "Beagle",
    age: "2 years",
    gender: "Female",
    location: "Pune",
    description: "Curious and playful",
    details: "Loves long walks",
    traits: ["Playful", "Friendly"],
    image: "https://placedog.net/503"
  },
  {
    name: "Rocky",
    breed: "Rottweiler",
    age: "4 years",
    gender: "Male",
    location: "Hyderabad",
    description: "Strong and confident",
    details: "Needs experienced owner",
    traits: ["Protective", "Strong"],
    image: "https://placedog.net/504"
  },
  {
    name: "Daisy",
    breed: "Pug",
    age: "1 year",
    gender: "Female",
    location: "Chennai",
    description: "Small and loving",
    details: "Great family dog",
    traits: ["Cute", "Affectionate"],
    image: "https://placedog.net/505"
  },
  {
    name: "Charlie",
    breed: "Cocker Spaniel",
    age: "2 years",
    gender: "Male",
    location: "Kolkata",
    description: "Happy and gentle",
    details: "Good with kids",
    traits: ["Gentle", "Happy"],
    image: "https://placedog.net/506"
  },
  {
    name: "Milo",
    breed: "Shih Tzu",
    age: "3 years",
    gender: "Male",
    location: "Jaipur",
    description: "Cute lap dog",
    details: "Low maintenance",
    traits: ["Calm", "Cute"],
    image: "https://placedog.net/507"
  },
  {
    name: "Coco",
    breed: "Pomeranian",
    age: "1 year",
    gender: "Female",
    location: "Indore",
    description: "Fluffy and playful",
    details: "Indoor dog",
    traits: ["Playful", "Fluffy"],
    image: "https://placedog.net/508"
  },
  {
    name: "Simba",
    breed: "Indie",
    age: "2 years",
    gender: "Male",
    location: "Bhopal",
    description: "Street smart and loving",
    details: "Rescued dog",
    traits: ["Smart", "Loyal"],
    image: "https://placedog.net/509"
  }
]);

console.log("✅ 10 Dogs added successfully");
process.exit();
