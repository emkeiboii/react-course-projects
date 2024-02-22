function FinishScreen({ points, mPP, highScore }) {
  const percentage = (points / mPP) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {mPP} (
        {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}

export default FinishScreen;
