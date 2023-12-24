const prompt = require("prompt-sync")();
let num = Number.parseInt(prompt("Enter Any Number : "));
console.log(num >= 0 ? " You Entered Number is Positive " : " You Entered Number is Negative ");
