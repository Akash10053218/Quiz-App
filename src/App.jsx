import { useState } from "react";
import Question from "./Question";

function App() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi",
    },
    {
      question: "2 + 2 = ?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "Which language is used in React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "Sun rises from?",
      options: ["West", "East", "North", "South"],
      answer: "East",
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hello Text Markup Language",
        "Hyper Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "CSS is used for?",
      options: ["Database", "Styling", "Backend", "Server"],
      answer: "Styling",
    },
    {
      question: "Which is a fruit?",
      options: ["Carrot", "Potato", "Apple", "Onion"],
      answer: "Apple",
    },
    {
      question: "React is a?",
      options: ["Library", "Database", "Browser", "Server"],
      answer: "Library",
    },
    {
      question: "How many days in a week?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Which planet do we live on?",
      options: ["Mars", "Earth", "Venus", "Jupiter"],
      answer: "Earth",
    },
  ];

  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[question].answer) {
      setScore(score + 1);
    }

    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setResult(true);
    }
  };

  let message = "";

  if (score <= 5) {
    message = "Need To Improve";
  } else if (score >= 6 && score <= 8) {
    message = "Good";
  } else {
    message = "Excellent";
  }

  return (
    <div>
      <h1>Quiz App</h1>

      {result ? (
        <div>
          <h2>Your Score: {score}/10</h2>
          <h3>{message}</h3>
        </div>
      ) : (
        <Question
          data={questions[question]}
          checkAnswer={checkAnswer}
        />
      )}
    </div>
  );
}

export default App;