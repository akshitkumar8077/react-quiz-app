import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./styles.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=20&category=10&type=multiple") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (isCorrect, answer) => {
    setResponses([
      ...responses,
      { question: questions[currentQuestion], isCorrect, answer },
    ]);
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Quiz Game</h1>
      {showResult ? (
        <Result score={score} total={questions.length} responses={responses} />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
