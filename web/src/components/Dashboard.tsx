import React from 'react';
import ChatInterface from './ChatInterface';
import MemoryLog from './MemoryLog';
import Puzzle from './Puzzle';

const Dashboard: React.FC = () => {
  const dummyMemories = [
    'Family picnic on July 4th',
    'Beach trip on August 10th',
    'Birthday party on October 15th',
  ];

  const dummyPuzzle = 'Recall this memory: “Birthday party on October 15th.” What gift did you receive?';

  return (
    <div>
      <header>
        <h1>MindLink Dashboard</h1>
      </header>
      <ChatInterface />
      <Puzzle puzzle={dummyPuzzle} />
      <MemoryLog memories={dummyMemories} />
    </div>
  );
};

export default Dashboard;
