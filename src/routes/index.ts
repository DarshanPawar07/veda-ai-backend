import express from "express";

import assignmentRoutes from "./assignment.routes";

import generationRoutes from "./generation.routes";

import healthRoutes from "./health.routes";

const router = express.Router();

router.use(
  "/assignments",
  assignmentRoutes
);

router.use(
  "/generation",
  generationRoutes
);

router.use("/health", healthRoutes);

export default router;