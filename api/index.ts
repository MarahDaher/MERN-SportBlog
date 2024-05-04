import express, { Express } from "express";
import { PORT } from "./config";
import { connectDB } from "./database";
import apiRoutes from "./routes/routes";

const app: Express = express();
// Allow send json in the body request
app.use(express.json());

app.use("/api", apiRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
});

// Create a Middleware to handle the error
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }
);
