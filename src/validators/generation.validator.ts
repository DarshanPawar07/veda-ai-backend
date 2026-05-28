import { body } from "express-validator";

export const generationValidator = [
  body("assignmentId")
    .notEmpty()
    .withMessage(
      "Assignment ID required"
    ),
];