import React, { useState } from 'react';
import { sendChatRequest } from '../utils/api';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    const response = await sendChatRequest(input, messages);
    setMessages([...messages, `You: ${input}`, `Assistant: ${response}`]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInterface;
