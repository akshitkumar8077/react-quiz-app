import React from "react";
import Question from "./../Question";

const Quiz = ({ question, handleAnswer }) => {
  if (!question) {
    return <div>Loading...</div>;
  }

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  return (
    <div className="card">
      <div className="card-body">
        <Question question={question.question} />
        <div className="list-group">
          {answers.map((answer, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() =>
                handleAnswer(answer === question.correct_answer, answer)
              }>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
