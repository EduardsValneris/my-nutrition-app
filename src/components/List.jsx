import React from "react";
import Buttons from "./Buttons";
import Food from "./Food";

function List() {
  const foods = [
    new Food("Beans", 100, 500, 8, 10, 0.2, 6),
    new Food("Rice", 130, 76, 2.7, 28, 0.3, 0.4),
    new Food("Chicken", 165, 124, 31, 0, 3.6, 0),
  ];

  return (
    <div className="list-container">
      <h1>Macros</h1>

      <table className="list">
        <thead>
          <th>Food</th> <th>kcal</th> <th>grams</th> <th>protein</th>{" "}
          <th>carbs</th> <th>fat</th> <th>fiber</th>
        </thead>

        {foods.map((Food) => (
          <tr>
            <td>{Food.name}</td>
            <td>{Food.kcal}</td>
            <td>{Food.grams}</td>
            <td>{Food.protein}</td>
            <td>{Food.carbs}</td>
            <td>{Food.fat}</td>
            <td>{Food.fiber}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default List;
