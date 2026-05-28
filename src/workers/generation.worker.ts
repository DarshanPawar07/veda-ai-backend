import { Worker }
from "bullmq";

import Assignment
from "../models/Assignment";

import { questionGenerator }
from "../services/ai/questionGenerator";

import { parseAIResponse }
from "../parsers/aiResponse.parser";

import { validateAIResponse }
from "../services/ai/responseValidator";

import { saveGeneratedPaper }
from "../services/generation/generation.service";

import { generatePDF }
from "../services/pdf/pdfGenerator";

new Worker(

  "question-generation-queue",

  async (job) => {

    try {

      const { assignmentId } =
        job.data;

      const assignment =
        await Assignment.findById(
          assignmentId
        );

      if (!assignment) {

        throw new Error(
          "Assignment not found"
        );
      }

      const aiResponse =
        await questionGenerator(
          assignment
        );

      const parsedResponse =
        parseAIResponse(
          aiResponse
        );

      validateAIResponse(
        parsedResponse
      );

      const generatedPaper =
        await saveGeneratedPaper(

          assignmentId,

          parsedResponse.sections
        );

      const pdfUrl =
        await generatePDF(
          assignment,
          parsedResponse
        );

      generatedPaper.pdfUrl =
        pdfUrl;

      await generatedPaper.save();

      assignment.status =
        "completed";

      await assignment.save();

      console.log(
        "Question Paper Generated"
      );

    } catch (error) {

      console.log(error);
    }
  },

  {
    connection: {
      url:
        process.env.REDIS_URL!,
    },
  }
);