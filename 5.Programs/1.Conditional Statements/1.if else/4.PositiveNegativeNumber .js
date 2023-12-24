const prompt = require("prompt-sync")();

let num;

num = Number.parseInt(prompt("Enter any Number : "));

if (num >= 0) {
  console.log("You Entered Number is Positive");
}

else {
  console.log("You Entered Number is Negative");
}
