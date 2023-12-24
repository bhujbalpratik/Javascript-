// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((num) => num * 3);

// console.log(double);

let peoples = [
  { firstName: "Pratik", lastName: "bhujbal" },
  { firstName: "Rahul", lastName: "Chavan" },
  { firstName: "Prashant", lastName: "kale" },
];

const results = peoples.map((person) => {
  return [person.firstName, person.lastName];
});

// console.log(results);

results.forEach((p) => console.log(p));
