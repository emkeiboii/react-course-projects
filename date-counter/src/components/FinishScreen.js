function FinishScreen({ points, mPP, highScore, dispatch }) {
  const percentage = (points / mPP) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {mPP} (
        {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Try again
      </button>
    </>
  );
}

export default FinishScreen;
