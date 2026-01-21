 function Controls({
  onIncrease,
  onDecrease,
  onChangeName,
  onReset,
}) {
  return (
    <div className="controls">
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
      <button onClick={onChangeName}>Change Name</button>
      <button onClick={onReset} className="reset">Reset</button>
    </div>
  );
}
export default Controls;