export const parseAIResponse =
  (response: any) => {

    // already object

    if (
      typeof response ===
      "object"
    ) {

      return response;
    }

    // string JSON

    if (
      typeof response ===
      "string"
    ) {

      return JSON.parse(
        response
      );
    }

    throw new Error(
      "Invalid AI Response Format"
    );
  };