import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://marah:123@mern-sportblog.8aiq0ls.mongodb.net/";
