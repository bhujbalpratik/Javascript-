
const prompt = require("prompt-sync");

var n = Number.parseInt(prompt("Enter Any Number : "));

var sum;

for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
        sum += i;
    }
}

if (sum == n) {
    console.log("You Entered Number is Perfect Number");
}
else {
    console.log("You Entered Number is Not Perfect Number");
}