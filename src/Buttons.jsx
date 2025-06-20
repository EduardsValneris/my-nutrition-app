function Buttons(){

const clickButton = (ButtonName) => {
    alert('Button ' + ButtonName + ' clicked!');
}

    return (
        <div className="button-container">
        <button onClick={() => clickButton("Add")} className="addButton"> Add </button>
            <div className="edit-delete-container">
                <button onClick={() => clickButton("Edit")} className="editButton"> Edit </button>
                <button onClick={() => clickButton("Delete")} className="deleteButton"> Delete </button>
            </div>
        </div>
    );
}
export default Buttons;


