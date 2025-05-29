import React, { useState } from 'react';

// Predefined genie responses
const genieResponses = [
  "I see a bright future for you!",
  "The answer lies within you.",
  "A journey of a thousand miles begins with a single step.",
  "Change is coming, embrace it!",
  "You have the power to make it happen.",
  "The stars are aligned in your favor.",
  "Patience is key, the answer will come.",
  "Follow your heart and trust your instincts.",
  "Great things are about to happen!",
  "The universe has a plan for you.",
  "Your dreams are within reach.",
  "Believe in yourself and you will succeed.",
  "The answer is yes!",
  "The answer is no.",
  "Try again later.",
  "It's not meant to be.",
  "The future is bright!",
  "You have what it takes!",
  "The time is right!",
  "Trust the journey."
];

const Genie: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const askGenie = () => {
    if (question.trim()) {
      // Get a random response
      const randomIndex = Math.floor(Math.random() * genieResponses.length);
      setResponse(genieResponses[randomIndex]);
      setShowResponse(true);
    }
  };

  const reset = () => {
    setQuestion('');
    setResponse('');
    setShowResponse(false);
  };

  return (
    <div className="genie-container">
      <div className="genie-lamp">
        <div className="genie-bottle">
          <div className="genie-bottle-top"></div>
          <div className="genie-bottle-bottom"></div>
        </div>
      </div>
      <div className="genie-content">
        <h1>Ask the Genie</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="What would you like to know?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askGenie()}
          />
          <button onClick={askGenie}>Ask</button>
        </div>
        {showResponse && (
          <div className="response-container">
            <p className="response">{response}</p>
            <button onClick={reset} className="reset-button">Ask Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Genie;
