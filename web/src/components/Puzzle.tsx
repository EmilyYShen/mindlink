import React from 'react';

const Puzzle: React.FC<{ puzzle: string }> = ({ puzzle }) => {
  return (
    <div className="container">
      <h2>Memory Puzzle</h2>
      <p>{puzzle}</p>
      <button>Submit Answer</button>
    </div>
  );
};

export default Puzzle;
