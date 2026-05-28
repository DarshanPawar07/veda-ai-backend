export const validateAIResponse = (
  response: any
) => {
  if (!response.sections) {
    throw new Error(
      "Invalid AI response"
    );
  }

  return true;
};