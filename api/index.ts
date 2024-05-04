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
