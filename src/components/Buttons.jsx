import React from "react";

function Buttons({ addProp }) {
  const clickButton = (ButtonName) => {
    alert("Button " + ButtonName + " clicked!");
  };

  return (
    <div className="button-container">
      <button
        onClick={() => addProp("Apple", 100, 200, 3, 10, 0.2, 7)}
        className="addButton"
      >
        {" "}
        Add{" "}
      </button>
      <div className="edit-delete-container">
        <button onClick={() => clickButton("Edit")} className="editButton">
          {" "}
          Edit{" "}
        </button>
        <button onClick={() => clickButton("Delete")} className="deleteButton">
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}

export default Buttons;
