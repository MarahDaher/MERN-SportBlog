import express, { Express } from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import { ErrorHandler } from "../utils/errorHandler";
import jwt from "jsonwebtoken";

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

export const signIn = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(new ErrorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(new ErrorHandler(400, "Invalid credentials"));
    }

    const isPasswordValid = bcryptjs.compareSync(
      password,
      validUser.password || ""
    );
    if (!isPasswordValid) {
      return next(new ErrorHandler(400, "Invalid credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET || "");

    const { password: _, ...userInfo } = validUser.toObject();

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        user: userInfo,
        token,
      });

    // Add code here to generate and send JWT token
  } catch (error: any) {
    next(new ErrorHandler(500, error.message || "Failed to login user"));
  }
};
