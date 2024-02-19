function FinishScreen({ points, mPP }) {
  const percentage = (points / mPP) * 100;

  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {mPP} ({Math.ceil(percentage)}
      % )
    </p>
  );
}

export default FinishScreen;
