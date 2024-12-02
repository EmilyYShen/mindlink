import React from 'react';

const MemoryLog: React.FC<{ memories: string[] }> = ({ memories }) => {
  return (
    <div className="container">
      <h2>Memory Log</h2>
      <ul>
        {memories.map((memory, idx) => (
          <li key={idx}>{memory}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryLog;
