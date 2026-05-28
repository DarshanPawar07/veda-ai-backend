// Error middleware
import {
  Request,
  Response,
  NextFunction,
} from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  return res.status(500).json({
    success: false,

    message:
      err.message ||
      "Internal Server Error",
  });
};