function input({ toggleProp, setToggle }) {
  const closeInput = () => {
    setToggle(false);
  };

  return (
    <div>
      <div
        className="input-background"
        onClick={closeInput}
        style={{ display: toggleProp ? "flex" : "none" }}
      ></div>
      <div
        className="input-container"
        style={{ display: toggleProp ? "flex" : "none" }}
      >
        <input className="input-area"></input>
        <button className="close-button" onClick={closeInput}>
          X
        </button>
      </div>
    </div>
  );
}

export default input;
