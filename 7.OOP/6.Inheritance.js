class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    throw new Error("method (makesound) must be implemented ");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  // Implementing the abstract method
  makeSound() {
    return "woff!";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Meow!";
  }
}

const dog = new Dog("Tommy");
console.log(dog.name);
console.log(dog.makeSound());

const cat = new Cat("Kitty");
console.log(cat.name);
console.log(cat.makeSound());
