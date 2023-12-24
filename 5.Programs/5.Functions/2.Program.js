
const prompt = require("prompt-sync")();

// With Arguments With-out return type .

function Sum(num1, num2) {
    console.log(num1 + num2);
}

var num1 = Number.parseInt(prompt("Enter First Number : "));

var num2 = Number.parseInt(prompt("Enter Second Number : "));

Sum(num1, num2);



// With Arguments With return type

function Sum(num1, num2) {
    return num1 + num2;
}

