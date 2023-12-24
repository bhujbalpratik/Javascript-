const prompt = require("prompt-sync")();

let num1, num2, num3;

num1 = Number.parseInt(prompt("Enter First Number : "));

num2 = Number.parseInt(prompt("Enter second Number : "));

num3 = Number.parseInt(prompt("Enter Third Number : "));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1, " is Greatest Number ");
}

if (num2 >= num1 && num2 >= num3) {
  console.log(num2, " is Greatest Number ");
}

if (num3 >= num1 && num3 >= num2) {
  console.log(num3, " is Greatest Number ");
}

