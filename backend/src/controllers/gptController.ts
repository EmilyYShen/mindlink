import { Request, Response } from 'express';
import { generateResponse } from '../services/gptService';

export const getChatResponse = async (req: Request, res: Response) => {
  const { prompt, memory } = req.body;
  const response = await generateResponse(prompt, memory);
  res.json({ response });
};
