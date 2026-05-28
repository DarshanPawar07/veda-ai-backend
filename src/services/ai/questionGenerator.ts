
/*
import { buildPrompt } from "./promptBuilder";

import { generateAIQuestions } from "./ai.service";

export const questionGenerator =
  async (assignment: any) => {
    const prompt =
      buildPrompt(assignment);

    const response =
      await generateAIQuestions(prompt);

    return response;
  };

 */

  //GEMINI

/*
  import { generateAIQuestions }
from "./ai.service";

export const questionGenerator =
  async (assignment: any) => {

    const prompt = `
Generate a question paper.

Title: ${assignment.title}

Instructions:
${assignment.instructions}

Questions:
${assignment.totalQuestions}

Marks:
${assignment.totalMarks}

Return JSON format only.
`;

    const response =
      await generateAIQuestions(
        prompt
      );

    return JSON.parse(response);
  };
  */

  //GROQ

  import { generateAIQuestions }
from "./ai.service";

export const questionGenerator =
  async (assignment: any) => {

    const prompt = `
Generate a question paper in JSON format.

Title: ${assignment.title}

Instructions:
${assignment.instructions}

Total Questions:
${assignment.totalQuestions}

Total Marks:
${assignment.totalMarks}

Return ONLY valid JSON.

Example:

{
  "sections": [
    {
      "title": "Section A",
      "instruction": "Attempt all questions",
      "questions": [
        {
          "question": "What is Newton's First Law?",
          "difficulty": "Easy",
          "marks": 5
        }
      ]
    }
  ]
}
`;

    const response =
      await generateAIQuestions(
        prompt
      );

    const cleanedResponse =
      response
        ?.replace(/```json/g, "")
        ?.replace(/```/g, "")
        ?.trim();

    console.log(
      cleanedResponse
    );

    return JSON.parse(
      cleanedResponse || "{}"
    );
  };