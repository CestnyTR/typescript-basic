class Car {
  brand: string;
  model: string;
  color: string;
  yearManufacture: number;

  constructor(
    brand: string,
    model: string,
    color: string,
    yearManufacture: number
  ) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.yearManufacture = yearManufacture;
  }
  year() {
    console.log(this.yearManufacture);
  }
}

let car = new Car("BMW", "BMW2", "RED", 2019);
console.log(car.brand + " " + car.color);

let car2 = new Car("Mercedes", "Hlo", "Black", 2025);
console.log(car.model + " " + car.yearManufacture);
