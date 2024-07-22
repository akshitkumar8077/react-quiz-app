import React from "react";

const Result = ({ score, total, responses }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Quiz Completed!</h5>
      <p className="card-text">
        Your score: {score} out of {total}
      </p>
      <h5 className="mt-4">Review your answers:</h5>
      <ul className="list-group">
        {responses.map((response, index) => (
          <li
            key={index}
            className={`list-group-item ${
              response.isCorrect
                ? "list-group-item-success"
                : "list-group-item-danger"
            }`}>
            <strong>Q:</strong>{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: response.question.question,
              }}></span>
            <br />
            <strong>Your Answer:</strong> {response.answer}
            <br />
            {!response.isCorrect && (
              <>
                <strong>Correct Answer:</strong>{" "}
                {response.question.correct_answer}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Result;
