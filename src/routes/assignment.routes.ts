import express
from "express";

import multer
from "multer";

import {

  createAssignment,

  getAssignments,

  getSingleAssignment,

  deleteAssignment,

} from "../controllers/assignment.controller";

const router =
  express.Router();

const upload =
  multer({
    dest: "uploads/",
  });

router.post(

  "/",

  upload.single(
    "file"
  ),

  createAssignment
);

router.get(
  "/",
  getAssignments
);

router.get(
  "/:id",
  getSingleAssignment
);

router.delete(
  "/:id",
  deleteAssignment
);

export default router;