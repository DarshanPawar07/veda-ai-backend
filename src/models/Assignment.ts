// Assignment model
import mongoose from "mongoose";

const assignmentSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,

        required: true,
      },

      instructions: {
        type: String,
      },

      dueDate: {
        type: String,
      },

      questionTypes: [
        {
          type: String,
        },
      ],

      totalQuestions: {
        type: Number,

        required: true,
      },

      totalMarks: {
        type: Number,

        required: true,
      },

      uploadedFile: {
        type: String,
      },

      extractedContent: {
        type: String,
      },

      status: {
        type: String,

        default: "processing",
      },
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Assignment",
  assignmentSchema
);