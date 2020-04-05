import React from 'react';

const Score = ({ correctAnswers, answeredQuestions }) => {
  return (
    <p className="text">
      Your Score: {`${correctAnswers} / ${answeredQuestions}`}
    </p>
  );
}

export default Score;
