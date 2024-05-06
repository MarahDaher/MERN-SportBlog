import express, { Express, Router } from "express";
import { signIn, signUp, google } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signIn", signIn);
router.post("/google", google);

export default router;
