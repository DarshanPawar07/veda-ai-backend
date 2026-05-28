// Generation routes
import express from "express";

import { getGeneratedPaper } from "../controllers/generation.controller";

const router = express.Router();

router.get("/:id", getGeneratedPaper);

export default router;