export const cleanMarkdown = (
  text: string
) => {
  return text
    .replace(/#/g, "")
    .replace(/\*/g, "")
    .trim();
};