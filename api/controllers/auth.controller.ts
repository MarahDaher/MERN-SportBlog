import express, { Express } from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import { ErrorHandler } from "../utils/errorHandler";

export const signUp = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(new ErrorHandler(400, "All fields are required"));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.send(newUser);
  } catch (error: any) {
    next(new ErrorHandler(500, error.message || "Failed to register user"));
  }
};
