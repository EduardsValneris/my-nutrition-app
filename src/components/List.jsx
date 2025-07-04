import React from "react";

function List({ foodsProp }) {
  return (
    <div className="list-container">
      <h1>Macros</h1>
      <table className="list">
        <thead>
          <tr>
            <th>Food</th>
            <th>kcal</th>
            <th>grams</th>
            <th>protein</th>
            <th>carbs</th>
            <th>fat</th>
            <th>fiber</th>
          </tr>
        </thead>
        <tbody>
          {foodsProp.map((foods, index) => (
            <tr key={index}>
              <td>{foods.name}</td>
              <td>{foods.kcal}</td>
              <td>{foods.grams}</td>
              <td>{foods.protein}</td>
              <td>{foods.carbs}</td>
              <td>{foods.fat}</td>
              <td>{foods.fiber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default List;
