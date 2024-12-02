import React, { useState } from 'react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'Bot', text: 'Welcome to MindLink! How are you feeling today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [
      ...messages,
      { sender: 'User', text: input },
      {
        sender: 'Bot',
        text:
          input.toLowerCase().includes('fine') || input.toLowerCase().includes('okay')
            ? "That's great to hear! Would you like to do a memory recall puzzle or chat about your day?"
            : "I'm here to help! How about a quick puzzle to get started?",
      },
    ];
    setMessages(newMessages);
    setInput('');
  };

  const addPuzzle = () => {
    const newMessages = [
      ...messages,
      { sender: 'Bot', text: 'Here’s a puzzle for you: Recall this memory: “Beach trip on August 10th.” What did you enjoy the most about that day?' },
    ];
    setMessages(newMessages);
  };

  return (
    <div className="container">
      <h2>Chat</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
            <p
              style={{
                display: 'inline-block',
                padding: '10px',
                margin: '5px',
                background: msg.sender === 'User' ? '#4a7c59' : '#ddd',
                color: msg.sender === 'User' ? 'white' : 'black',
                borderRadius: '10px',
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
      <button style={{ marginLeft: '10px' }} onClick={addPuzzle}>
        Get a Puzzle
      </button>
    </div>
  );
};

export default ChatInterface;
