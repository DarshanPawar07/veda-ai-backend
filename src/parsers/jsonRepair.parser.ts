export const repairJSON = (
  rawText: string
) => {
  return rawText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};