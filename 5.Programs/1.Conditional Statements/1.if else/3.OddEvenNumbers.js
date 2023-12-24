const prompt = require("prompt-sync")();

let num;

num = Number.parseInt(prompt("Enter Any Number : "));

if (num % 2 == 0) {
  console.log(num, " is Even Number ");
}

else {
  console.log(num, " is Odd Number ");
}

