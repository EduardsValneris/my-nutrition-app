class Food {
  constructor(name, kcal, grams, protein, carbs, fat, fiber) {
    this.name = name;
    this.kcal = kcal;
    this.grams = grams;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
    this.fiber = fiber;
  }

  toString() {
    return `${this.name}, ${this.kcal}, ${this.grams}, ${this.protein}, ${this.carbs}, ${this.fat}, ${this.fiber}`;
  }

  foods = [
    new Food("Beans", 100, 500, 8, 10, 0.2, 6),
    new Food("Rice", 130, 76, 2.7, 28, 0.3, 0.4),
    new Food("Chicken", 165, 124, 31, 0, 3.6, 0),
  ];

  addFood() {
    newFood = new Food("Apple", 100, 200, 3, 10, 0.2, 7);
    this.foods.push(newFood);
  }
}

export default Food;
