// Generation controller
import { Request, Response } from "express";

import GeneratedPaper from "../models/GeneratedPaper";

export const getGeneratedPaper = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const paper =
      await GeneratedPaper.findOne({
        assignmentId: id,
      });

    if (!paper) {
      return res.status(404).json({
        success: false,
        message: "Generated paper not found",
      });
    }

    return res.status(200).json({
      success: true,
      paper,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch generated paper",
    });
  }
};