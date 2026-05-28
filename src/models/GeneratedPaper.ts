import mongoose from "mongoose";

const QuestionSchema =
  new mongoose.Schema({
    question: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
    },

    marks: {
      type: Number,
    },
  });

const SectionSchema =
  new mongoose.Schema({
    title: {
      type: String,
    },

    instruction: {
      type: String,
    },

    questions: [
      QuestionSchema,
    ],
  });

const GeneratedPaperSchema =
  new mongoose.Schema(
    {
      assignmentId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Assignment",
      },

      sections: [
        SectionSchema,
      ],

      pdfUrl: {
        type: String,
      },
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "GeneratedPaper",
  GeneratedPaperSchema
);