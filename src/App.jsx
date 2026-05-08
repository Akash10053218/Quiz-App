import { useState } from "react";
import Question from "./components/Questions";

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
      question: "React is a?",
      options: ["Library", "Database", "Browser", "Server"],
      answer: "Library",
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

  const restartQuiz = () => {
    setQuestion(0);
    setScore(0);
    setResult(false);
  };


  const progress =
    ((question + 1) / questions.length) * 100;

  let message = "";

  if (score <= 1) {
    message = "Need Improvement 😅";
  } else if (score <= 3) {
    message = "Good Job 👍";
  } else {
    message = "Excellent 🎉";
  }

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-600
      via-purple-600
      to-pink-500
      flex
      items-center
      justify-center
      px-4
      py-10
    ">

      <div className="
        w-full
        max-w-4xl
        bg-white/90
        backdrop-blur-lg
        rounded-[40px]
        shadow-2xl
        overflow-hidden
      ">

        <div className="
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          p-8
          text-center
          text-white
        ">

          <h1 className="
            text-5xl
            md:text-6xl
            font-extrabold
            tracking-wide
          ">
            Quiz App
          </h1>

          <p className="
            mt-4
            text-lg
            text-indigo-100
          ">
            Challenge your knowledge 🚀
          </p>
        </div>

        <div className="p-6 md:p-10">

          {result ? (
            <div className="text-center">

              <div className="
                w-52
                h-52
                mx-auto
                rounded-full
                bg-gradient-to-r
                from-indigo-500
                to-purple-500
                flex
                items-center
                justify-center
                shadow-2xl
              ">

                <div className="text-white">

                  <h2 className="
                    text-6xl
                    font-extrabold
                  ">
                    {score}
                  </h2>

                  <p className="text-lg">
                    / {questions.length}
                  </p>
                </div>
              </div>

              {/* Message */}
              <h3 className="
                mt-8
                text-4xl
                font-bold
                text-gray-800
              ">
                {message}
              </h3>

              <p className="
                mt-3
                text-gray-500
                text-lg
              ">
                Quiz Completed Successfully 🎉
              </p>

              <button
                onClick={restartQuiz}
                className="
                  mt-10
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-500
                  hover:scale-105
                  transition-all
                  duration-300
                  text-white
                  px-10
                  py-4
                  rounded-full
                  text-lg
                  font-semibold
                  shadow-xl
                "
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <div>

              <div className="mb-10">

                <div className="
                  flex
                  justify-between
                  items-center
                  mb-4
                ">

                  <p className="
                    text-gray-600
                    font-semibold
                    text-lg
                  ">
                    Question {question + 1}
                  </p>

                  <p className="
                    text-indigo-600
                    font-bold
                    text-lg
                  ">
                    {questions.length}
                  </p>
                </div>

            
                <div className="
                  w-full
                  h-4
                  bg-gray-200
                  rounded-full
                  overflow-hidden
                ">

                  <div
                    className="
                      h-4
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-500
                      to-purple-500
                      transition-all
                      duration-500
                    "
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>

            
              <Question
                data={questions[question]}
                checkAnswer={checkAnswer}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;