// Prompt builder
export const buildPrompt = (
  assignment: any
) => {
  return `
Generate a structured JSON exam paper.

Title:
${assignment.title}

Instructions:
${assignment.instructions}

Question Types:
${assignment.questionTypes}

Total Questions:
${assignment.totalQuestions}

Total Marks:
${assignment.totalMarks}

Reference Material:
${assignment.extractedContent}

Return ONLY valid JSON.
`;
};