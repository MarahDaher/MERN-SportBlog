import express, { Express } from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";

export const signUp = async (req: any, res: any) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All Fields are required!" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();

    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
