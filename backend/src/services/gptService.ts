import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export const generateResponse = async (prompt: string, memory: string[]): Promise<string> => {
  try {
    const memoryContext = memory.join('; ');
    const fullPrompt = `${memoryContext}\n${prompt}`;
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: fullPrompt }],
    });

    // Safely access response data
    const messageContent = response?.data?.choices?.[0]?.message?.content;

    if (!messageContent) {
      throw new Error('No response received from OpenAI API');
    }

    return messageContent;
  } catch (error) {
    console.error('Error generating GPT response:', error);
    throw new Error('Failed to generate response');
  }
};
