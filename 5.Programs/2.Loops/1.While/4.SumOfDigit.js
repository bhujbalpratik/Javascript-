const prompt = require("prompt-sync")();
let n = Number.parseInt(prompt("Enter Positive Integer : "));
let sum = 0;
let r;
while (n > 0) {
    r=Number.parseInt(n % 10);
    sum =Number.parseInt(sum+ r);
    n =Number.parseInt(n/10);
}
console.log("Sum Of You Entered Number Digits IS ",sum);