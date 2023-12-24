
const prompt = require("prompt-sync")();

let yr;

yr = Number.parseInt(prompt("Enter Year : "));

if (yr % 400 == 0 || (yr % 100 != 0 && yr % 4 == 0)) {
  console.log("You Entered Year is Leap Year !");
}

else {
  console.log("You Entered Year is Not A Leap Year !");
}



