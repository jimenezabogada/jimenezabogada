
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from './types';

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string, lang: Language = Language.ES): Promise<string> => {
  if (!API_KEY) {
    return lang === Language.ES 
      ? "Lo siento, la asistencia por IA no está configurada correctamente en este momento."
      : "Sorry, AI assistance is not correctly configured at the moment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const instruction = lang === Language.ES
      ? "Eres un asistente legal virtual de alto nivel para el bufete 'Jimenez Abogada'. Responde en ESPAÑOL. Tu tono es profesional, sofisticado y empático. SIEMPRE indica que no eres un abogado real y que se requiere consulta profesional."
      : "You are a high-level virtual legal assistant for the 'Jimenez Abogada' law firm. Respond in ENGLISH. Your tone is professional, sophisticated, and empathetic. ALWAYS state that you are not a real lawyer and that professional consultation is required.";

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: instruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || (lang === Language.ES ? "No pude generar una respuesta." : "I could not generate a response.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === Language.ES 
      ? "Lo siento, hubo un problema técnico."
      : "Sorry, there was a technical problem.";
  }
};
