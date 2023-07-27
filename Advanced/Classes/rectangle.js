class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calcArea() {
    return this.height * this.width;
  }
}

function useRectangle() {
  const rectangle = new Rectangle(2, 3, "Red");

  console.log(rectangle.width);
  console.log(rectangle.height);
  console.log(rectangle.calcArea());
  console.log(rectangle.color);
}

useRectangle();
