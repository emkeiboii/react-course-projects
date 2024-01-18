function StartQuestions({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your mastery</h3>
      <button className="btn btn-ui">Start the quiz</button>
    </div>
  );
}

export default StartQuestions;
