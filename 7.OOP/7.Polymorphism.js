class Shapes {
  constructor(name) {
    this.name = name;
  }
  Formula() {
    return "Shape Not Exist";
  }
}

class Square extends Shapes {
  constructor(name) {
    super(name);
  }

  // Overriding

  Formula() {
    return "side * side";
  }
}
class Triangle extends Shapes {
  constructor(name) {
    super(name);
  }

  // Overriding

  Formula() {
    return "1/2 * base * height";
  }
}
class Circle extends Shapes {
  constructor(name) {
    super(name);
  }

  // Overriding

  Formula() {
    return "2 * 3.14 * (r * r)";
  }
}

const AreaFormula = (shapes) => {
  console.log(`Name : ${shapes.name}`);
  console.log(`Formula : ${shapes.Formula()}`);
};

const square = new Square("Square");
AreaFormula(square);

const triangle = new Triangle("Triangle");
AreaFormula(triangle);

const circle = new Circle("Circle");
AreaFormula(circle);
