import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

import { getMemory, addMemory } from '../models/memoryModel';

export const generateResponse = async (userId: string, prompt: string): Promise<string> => {
  const memory = getMemory(userId);
  const memoryContext = memory.join('; ');
  const fullPrompt = `${memoryContext}\n${prompt}`;
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: fullPrompt }],
  });

  const messageContent = response?.data?.choices?.[0]?.message?.content || 'No response';
  addMemory(userId, prompt);
  addMemory(userId, messageContent);

  return messageContent;
};

