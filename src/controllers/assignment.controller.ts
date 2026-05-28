import { Request, Response }
from "express";

import Assignment
from "../models/Assignment";

import { generationQueue }
from "../queues/generation.queue";

export const createAssignment =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const {

        title,
        instructions,
        dueDate,
        questionTypes,
        totalQuestions,
        totalMarks,

      } = req.body;

      const uploadedFile =
        req.file?.path || "";

      const assignment =
        await Assignment.create({

          title,
          instructions,
          dueDate,

          questionTypes:
            questionTypes || [],

          totalQuestions,
          totalMarks,

          uploadedFile,

          status:
            "processing",
        });

      await generationQueue.add(

        "generate-question-paper",

        {
          assignmentId:
            assignment._id,
        }
      );

      return res.status(201).json({

        success: true,

        message:
          "Assignment created successfully",

        assignment,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to create assignment",
      });
    }
  };

export const getAssignments =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const assignments =
        await Assignment.find()

          .sort({
            createdAt: -1,
          })

          .select(
            "-__v"
          );

      return res.status(200).json({

        success: true,

        count:
          assignments.length,

        assignments,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to fetch assignments",
      });
    }
  };

export const getSingleAssignment =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const { id } =
        req.params;

      const assignment =
        await Assignment.findById(
          id
        );

      if (!assignment) {

        return res.status(404).json({

          success: false,

          message:
            "Assignment not found",
        });
      }

      return res.status(200).json({

        success: true,

        assignment,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to fetch assignment",
      });
    }
  };

export const deleteAssignment =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const { id } =
        req.params;

      const assignment =
        await Assignment.findById(
          id
        );

      if (!assignment) {

        return res.status(404).json({

          success: false,

          message:
            "Assignment not found",
        });
      }

      await assignment.deleteOne();

      return res.status(200).json({

        success: true,

        message:
          "Assignment deleted successfully",
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Failed to delete assignment",
      });
    }
  };