import express, { Express } from "express";
import { PORT } from "./config";
import { connectDB } from "./database";
import routes from "./routes/routes";

const app: Express = express();

app.use("/", routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
});
