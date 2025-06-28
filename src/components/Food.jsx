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

  // toString() {
  //   return `${this.name}, ${this.kcal}, ${this.grams}, ${this.protein}, ${this.carbs}, ${this.fat}, ${this.fiber}`;
  // }
}

export default Food;
