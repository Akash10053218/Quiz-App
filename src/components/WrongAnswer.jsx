function WrongAnswer({ wrongAnswers }) {
  return (
    <div>
      <h2>Wrong Answers</h2>

      {wrongAnswers.length === 0 ? (
        <p>No Wrong Answers</p>
      ) : (
        wrongAnswers.map((item, index) => (
          <div key={index}>
            <p>Question: {item.question}</p>
            <p>Your Answer: {item.selected}</p>
            <p>Correct Answer: {item.correct}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default WrongAnswer;