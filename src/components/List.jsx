import Buttons from "./Buttons";

function List() {
  //   const foods = [
  //     [Beans,100,500,8,10,0.2,6],
  //     [Rice,130,76,2.7,28,0.3,0.4],
  //     [Chicken,165,124,31,0,3.6,0],
  //   ];
  const foods = Array(7).fill("Beans,100,500,8,10,0.2,6");

  //   <tr>
  //   {foods.map((food) => (
  //     <li>{food.replaceAll(",", " ")}</li>
  //   ))}
  // </tr>

  return (
    <div className="list-container">
      <h1>Macros</h1>

      <table className="list">
        <tr>
          <th>Food</th> <th>kcal</th> <th>grams</th> <th>protein</th>{" "}
          <th>carbs</th> <th>fat</th> <th>fiber</th>
        </tr>

        <tr>
          {foods.map((food) => (
            <li>{food.replaceAll(",", " ")}</li>
          ))}
        </tr>
      </table>
    </div>
  );
}
export default List;
