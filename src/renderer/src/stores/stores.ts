import axios from "axios"

export const storeGemini = async (text: string) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC2-YUBmtYuv0fJglOUslLKwHB227ZcByk`,
      {
        contents: [
          {
            parts: [{ text }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    console.log("Gemini response:", response.data)
    return response.data
  } catch (error) {
    console.error("Gemini API error:", error)
    throw error
  }
}

