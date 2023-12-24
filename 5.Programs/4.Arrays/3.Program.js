
const prompt = require("prompt-sync")();

var Ary = [];

var size = Number.parseInt(prompt("Enter Size Of Array : "));

var sum = 0;

for (let i = 0; i < size; i++) {
    Ary[i] = Number.parseInt(prompt("Enter " + (i + 1) + " Element : "));

}

for (let i = 0; i < size; i++) {
    sum += Ary[i];

}

console.log("Sum Of Array is : ", sum);




