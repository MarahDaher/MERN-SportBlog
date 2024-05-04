import { Request, Response, NextFunction } from "express";

export function responseMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const originalSend = res.send.bind(res);

  res.send = function (body?: any) {
    const modifiedBody = {
      success: true,
      data: body,
    };
    return originalSend(JSON.stringify(modifiedBody));
  };

  next();
}
