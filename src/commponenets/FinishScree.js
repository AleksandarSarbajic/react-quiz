function FinishScree({ points, maxPossiblePoints, highscore, dispatch }) {
  const percent = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percent === 100) emoji = "🎖️";
  if (percent >= 80 && percent < 100) emoji = "🥈";
  if (percent >= 50 && percent < 80) emoji = "🥈";
  if (percent >= 0 && percent < 50) emoji = "🥉";
  if (percent === 0) emoji = "🐐";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percent)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScree;
