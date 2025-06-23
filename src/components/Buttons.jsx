import { addFood } from "./Food";

function Buttons() {
  function add() {
    alert("Add button clicked!");
    Foods;
  }

  const clickButton = (ButtonName) => {
    alert("Button " + ButtonName + " clicked!");
  };

  return (
    <div className="button-container">
      <button onClick={() => addFood()} className="addButton">
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
