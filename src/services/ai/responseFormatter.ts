export const responseFormatter = (
  response: any
) => {
  return {
    sections: response.sections || [],
  };
};