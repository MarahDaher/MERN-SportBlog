import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils/errorHandler";

export function errorMiddleware(
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong on the server.";

  res.status(statusCode).send({
    success: false,
    message: message,
  });
}
