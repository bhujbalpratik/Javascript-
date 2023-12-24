const prompt = require("prompt-sync")();
let n = Number.parseInt(prompt("Enter Number to Print Table : "));
let i = 1;
while (i <= 10) {
  console.log(n * i);
  i++;
}
