export const sectionGenerator = (
  questions: any[]
) => {
  return [
    {
      title: "Section A",

      instruction:
        "Attempt all questions",

      questions,
    },
  ];
};