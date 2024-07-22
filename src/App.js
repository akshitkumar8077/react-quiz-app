import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import CategorySelection from "./components/CategorySelection";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedCategory !== null) {
      setIsLoading(true);
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&type=multiple`
      )
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.results);
          setIsLoading(false);
        });
    }
  }, [selectedCategory]);

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

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setQuestions([]);
    setResponses([]);
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Quiz Game</h1>
      {selectedCategory === null ? (
        <CategorySelection onSelectCategory={handleCategorySelection} />
      ) : isLoading ? (
        <div>Loading...</div>
      ) : showResult ? (
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
