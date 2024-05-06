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
      return next(new ErrorHandler(400, "Email doesn't exist"));
    }

    const isPasswordValid = bcryptjs.compareSync(
      password,
      validUser.password || ""
    );

    if (!isPasswordValid) {
      return next(new ErrorHandler(400, "Invalid Password"));
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

export const google = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "");
      const { password: _, ...userInfo } = user.toObject();
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(userInfo);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });

      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET || ""
      );
      const { password: _, ...userInfo } = newUser.toObject();
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(userInfo);
    }
  } catch (error) {}
};
