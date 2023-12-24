
const prompt = require("prompt-sync")();

let Num1 = Number.parseInt(prompt("Enter First Number : "));

let Num2 = Number.parseInt(prompt("Enter Second Number : "));

console.log("Before Swap : ");

console.log("A = ", Num1);

console.log("B = ", Num2);

Swap(Num1, Num2);

function Swap(n1, n2) {
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;

    console.log("After Swap : ");

    console.log("A = ", n1);

    console.log("B = ", n2);

}



