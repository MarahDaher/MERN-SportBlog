import { Request, Response, NextFunction } from "express";

export function responseMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const originalSend = res.send.bind(res);

  res.send = function (body?: any) {
    // Check if the response is already an error response by status code
    if (res.statusCode >= 400 && res.statusCode < 600) {
      return originalSend(body); // Send the error response as it is
    }

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {}
    }
    const modifiedBody = {
      success: true,
      data: body,
    };
    return originalSend(JSON.stringify(modifiedBody));
  };

  next();
}
