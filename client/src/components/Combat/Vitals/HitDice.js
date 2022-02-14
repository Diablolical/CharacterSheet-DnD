function HitDice() {
  return (
    <div className="block vitalsBlock">
      <div className="top">
        <span>Total</span>
        <input
          type="text"
          className="hit-dice-total"
          name="hit-dice-total"
          title="hit-dice-total"
        />
      </div>
      <input
        type="number"
        className="hit-dice-input"
        name="hit-dice"
        title="hit-dice"
      />
      <span className="label">Hit Dice</span>
    </div>
  );
}

export default HitDice;
