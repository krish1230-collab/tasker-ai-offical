import axios from "axios";

const GEMINI_API_KEY = "AIzaSyD491EUciBCRYVqH2yoQY_kUF40yv23sME"; // 🔐 Use actual key

export const fetchGeminiResponse = async (userInput) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: userInput }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini."
    );
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    return "Sorry, something went wrong.";
  }
};
