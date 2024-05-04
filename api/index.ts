import apiRoutes from "./routes/routes";
import cors from "cors";
import express, { Express } from "express";
import { connectDB } from "./database";
import { errorMiddleware } from "./middlwares/errorMiddleware";
import { PORT } from "./config";
import { responseMiddleware } from "./middlwares/responseMiddlware";

const app: Express = express();
// Allow send json in the body request
app.use(express.json());

// Enable All CORS Requests
// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Specify the exact origin
  credentials: true, // Enable credentials
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

//Routes
app.use(responseMiddleware);

app.use("/api", apiRoutes);

// Middlwares
app.use(errorMiddleware);

// Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
});
