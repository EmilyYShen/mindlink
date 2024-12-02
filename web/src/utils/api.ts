// src/utils/api.ts

export const sendChatRequest = async (input: string, messages: string[]): Promise<string> => {
    try {
      // Adjust the API endpoint to match your backend's URL
      const response = await fetch('http://localhost:3000/api/gpt/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,      // User's input
          memory: messages,   // Chat history or memory
        }),
      });
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const data = await response.json();
      return data.response; // Adjust this to match the structure of your backend response
    } catch (error) {
      console.error('Error in sendChatRequest:', error);
      return 'An error occurred while processing your request.';
    }
  };
  