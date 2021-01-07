import React from "react";

const ResultQuiz = ({ score, playAgain }) => {
  let message = "";
  switch (score) {
    case 0:
    case 1:
      message = "Did you even open a book in your life ?";
      break;
    case 2:
    case 3:
      message = "Keep going!";
      break;
    case 4:
      message = "Not that bad...";
      break;
    default:
      message = "Einstein is that you ? Well done !";
      break;
  }

  return (
    <div className="scoreBoard">
      <div className="score">
        You scored {score} / 5 correct answers
        <p>{message}</p>
      </div>
      <div className="playBtn" onClick={playAgain}>
        Play again
      </div>
    </div>
  );
};

export default ResultQuiz;
