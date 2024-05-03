import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "./config";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("Mongoose is connected to Atlas!");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};
