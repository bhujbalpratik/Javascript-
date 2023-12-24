
const prompt = require("prompt-sync")();

var Ary = [];

var size = Number.parseInt(prompt("Enter Size Of Array : "));

for (var i = 0; i < size; i++) {
    Ary[i] = Number.parseInt(prompt("Enter " + (i + 1) + " Element : "));
}

var max = Ary[0];
var min = Ary[0];

for (var i = 0; i < size; i++) {
    if (max < Ary[i]) {
        max = Ary[i];
    }

    if (min > Ary[i]) {
        min = Ary[i];
    }
}

console.log("Maximum Number Of Array : ", max);

console.log("Minimum Number Of Array : ", min);

