
const prompt = require("prompt-sync")();
const fibonanci = (n) => {
    var Output = [];

    if (n == 1) {
        Output = [0];
    }
    else if (n == 2) {
        Output = [0, 1];
    }
    else {
        Output = [0, 1];
        for (i = 2; i < n; i++) {
            Output.push(Output[Output.length - 1] + Output[Output.length - 2]);
        }
    }
    return Output;
}

let n = prompt("Enter Any Number : ");
fibonanci(n);

console.log(fibonanci(n));
