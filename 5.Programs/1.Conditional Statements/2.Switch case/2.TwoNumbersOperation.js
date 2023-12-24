const prompt = require("prompt-sync")();

let num1, num2, op;
num1 = Number.parseInt(prompt("Enter First Number : "));
op = prompt("Operaton : ");
num2 = Number.parseInt(prompt("Enter Second Number : "));
switch (op) {
  case "+":
    console.log("Addition = ", num1 + num2);
    break;
  case "-":
    console.log("Subtraction = ", num1 - num2);
    break;
  case "*":
    console.log("Multiplication = ", num1 * num2);
    break;
  case "/":
    console.log("Division = ", num1 / num2);
    break;
  case "%":
    console.log("Modulas Division = ", num1 % num2);
    break;
  default:
    console.log("Invalid Operation");
    break;
}
