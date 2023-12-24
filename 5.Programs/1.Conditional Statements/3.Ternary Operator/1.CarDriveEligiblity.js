const prompt = require("prompt-sync")();

let age;

age = Number.parseInt(prompt("Enter Your Age : "));

console.log(age >= 18 ? " Is Able To " : " IS Not Able To ", "Drive ");



