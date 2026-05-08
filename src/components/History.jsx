function History({ history }) {
  return (
    <div>
      <h2>Answer History</h2>

      {history.map((item, index) => (
        <div key={index}>
          <p>Question: {item.question}</p>
          <p>Your Answer: {item.selected}</p>
        </div>
      ))}
    </div>
  );
}

export default History;