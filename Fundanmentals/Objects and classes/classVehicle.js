function solve() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
    }

    drive(fuelLoss) {
      fuel -= fuelLoss;
    }
  }

  class Parts {
    constructor(engine, power, quality) {
      this.engine = engine;
      this.power = power;
      this.quality = quality;
    }
  }
}
