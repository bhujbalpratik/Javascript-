// for (let key in object ){...}

// const person = {
//   name: "Pratik",
//   age: 20,
//   gender: "male",
// };

// for (let keys in person) {
//   console.log(person[keys]);
// }

const object = { a: 1, b: 2, c: 3 };

for (const properties in object) {
  console.log(`${properties}:${object[properties]}`);
}
