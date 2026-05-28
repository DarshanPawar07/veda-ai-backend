import express from "express";

import GeneratedPaper
from "../models/GeneratedPaper";

const router =
  express.Router();

router.get(
  "/:assignmentId",

  async (req, res) => {

    try {

      const paper =
        await GeneratedPaper.findOne({
          assignmentId:
            req.params.assignmentId,
        });

      if (!paper) {

        return res.status(404).json({
          success: false,
          message:
            "PDF not found",
        });
      }

      return res.json({
        success: true,
        pdfUrl: paper.pdfUrl,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  }
);

export default router;