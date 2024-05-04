import express, { Express, Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Test User Server");
});

export default router;
