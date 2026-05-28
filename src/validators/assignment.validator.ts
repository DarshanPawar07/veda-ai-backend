import { body } from "express-validator";

export const assignmentValidator = [
  body("title")
    .notEmpty()
    .withMessage(
      "Title is required"
    ),

  body("totalQuestions")
    .isNumeric()
    .withMessage(
      "Total questions must be number"
    ),

  body("totalMarks")
    .isNumeric()
    .withMessage(
      "Total marks must be number"
    ),
];