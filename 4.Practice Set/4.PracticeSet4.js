const prompt = require("prompt-sync")();
// 1)Create an Array of numbers and take input from the user to add that number to array.
/*
let Ary = [1, 2, 3, 4, 5, 6];
let num = Number.parseInt(prompt("Enter Any Number : "));
Ary.push(num);
console.log(Ary);
*/

// 2)Keep adding numbers to the array until 0 is added to the array.
/*
let Ary = [1, 2, 3, 43, 5, 6, 85, 78];
do {
  var num = Number.parseInt(prompt("Enter Any Number : "));
  Ary.push(num);
} while (num != 0);
console.log(Ary);
*/

// 3)Filter for numbers divisible by 10 from a given array.
/*
let Ary = [11, 20, 45, 60, 78, 200, 67, 50];
let newAry = Ary.filter((x) => {
  return x % 10 == 0;
});
console.log(newAry);
*/

// 4)Create an Array of Squares given numbers.
/*
let Ary = [11, 20, 45, 60, 78, 200, 67, 50];
let newAry = Ary.map((x) => {
  return x * x;
});
console.log(newAry);
*/

// 5)Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated )
let Ary = [76, 75, 79, 89, 99];
let newAry = Ary.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(newAry);
