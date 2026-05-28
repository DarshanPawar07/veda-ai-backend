import {
  Request,
  Response,
  NextFunction,
} from "express";

export const validateAssignment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    totalQuestions,
    totalMarks,
  } = req.body;

  if (
    !title ||
    !totalQuestions ||
    !totalMarks
  ) {
    return res.status(400).json({
      success: false,

      message:
        "Required fields are missing",
    });
  }

  next();
};