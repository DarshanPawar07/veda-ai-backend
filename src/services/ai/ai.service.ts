// AI service

/*
import { openai } from "../../config/openai";

export const generateAIQuestions =
  async (prompt: string) => {
    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return response.choices[0].message
      .content;
  };
  */

  //GEMINI 
  /*
 import { geminiModel }
from "../../config/gemini";

export const generateAIQuestions =
  async (prompt: string) => {

    const result =
      await geminiModel.generateContent(
        prompt
      );

    const response =
      result.response.text();

    return response;
  };
 */

  //groq

  import { groq }
from "../../config/groq";

export const generateAIQuestions =
  async (prompt: string) => {

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.3-70b-versatile",
      });

    return completion
      .choices[0]
      .message.content;
  };