
const prompt = require("prompt-sync")();

function Factorial(n) {
    var fr = 1;
    for (let i = 1; i <= n; i++) {
        fr = fr * i;
    }
    console.log("Factorial OF ", n, " is ", fr);
}

let Num = Number.parseInt(prompt("Enter Any Number : "));

Factorial(Num);

