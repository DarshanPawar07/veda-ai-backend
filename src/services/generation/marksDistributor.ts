export const distributeMarks = (
  totalQuestions: number,
  totalMarks: number
) => {
  return Math.floor(
    totalMarks / totalQuestions
  );
};