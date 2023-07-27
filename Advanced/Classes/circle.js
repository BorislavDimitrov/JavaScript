class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get area() {
    return this.radius * this.radius * Math.PI;
  }
}

function useCircle() {
  const cirlce = new Circle(2);
  console.log(cirlce.area);
  cirlce.diameter = 5;
  console.log(cirlce.area);
}

useCircle();
