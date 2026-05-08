import { useState } from "react";
import Question from "./components/Questions";
import History from "./components/History";
import WrongAnswer from "./components/WrongAnswer";

function App() {

  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
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
      question: "Which is a fruit?",
      options: ["Apple", "Potato", "Onion", "Carrot"],
      answer: "Apple",
    },

    {
      question: "React is a?",
      options: ["Library", "Browser", "Database", "Server"],
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

    {
      question: "HTML is used for?",
      options: ["Styling", "Structure", "Database", "Server"],
      answer: "Structure",
    },

    {
      question: "CSS is used for?",
      options: ["Styling", "Backend", "Database", "Hosting"],
      answer: "Styling",
    },
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [history, setHistory] = useState([]);

  const [wrongAnswers, setWrongAnswers] = useState([]);



  const checkAnswer = (option) => {

    setHistory([
      ...history,
      {
        question: questions[currentQuestion].question,
        selected: option,
      },
    ]);


    if (option === questions[currentQuestion].answer) {

      setScore(score + 1);
    }

    else {

      setWrongAnswers([
        ...wrongAnswers,
        {
          question: questions[currentQuestion].question,
          selected: option,
          correct: questions[currentQuestion].answer,
        },
      ]);
    }


    if (currentQuestion + 1 < questions.length) {

      setCurrentQuestion(currentQuestion + 1);
    }

    else {

      setShowResult(true);
    }
  };




  let message = "";

  if (score <= 5) {

    message = "Need To Improve";
  }

  else if (score >= 6 && score <= 8) {

    message = "Good";
  }

  else {

    message = "Excellent";
  }




  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Quiz App
        </h1>


        {showResult ? (

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Your Score: {score}/10
            </h2>

            <h3 className="text-xl text-green-600 mb-6">
              {message}
            </h3>

            <History history={history} />

            <WrongAnswer wrongAnswers={wrongAnswers} />

          </div>

        ) : (

          <div>

            <Question
              data={questions[currentQuestion]}
              checkAnswer={checkAnswer}
            />

          </div>

        )}

      </div>

    </div>
  );
}

export default App;
