import React, { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Food from "./components/Food.jsx";
import List from "./components/List.jsx";

function App() {
  const addFood = (name, grams, kcal, protein, carbs, fat, fiber) => {
    const newFood = new Food(name, grams, kcal, protein, carbs, fat, fiber);
    setFood([...FoodArray, newFood]);
  };

  const [FoodArray, setFood] = useState([
    new Food("Beans", 100, 500, 8, 10, 0.2, 6),
    new Food("Rice", 130, 76, 2.7, 28, 0.3, 0.4),
    new Food("Chicken", 165, 124, 31, 0, 3.6, 0),
  ]);

  return (
    <div>
      <Buttons addProp={addFood} /> <List foodsProp={FoodArray} />
    </div>
  );
}

export default App;
