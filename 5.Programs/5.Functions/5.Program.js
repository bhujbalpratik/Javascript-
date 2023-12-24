
const prompt = require("prompt-sync")();


let Num1 = Number.parseInt(prompt("Enter First Number : "));

let Opt = prompt("Enter Operation : ");

let Num2 = Number.parseInt(prompt("Enter Second Number : "));

Operation(Num1, Num2, Opt);

function Operation(n1, n2, op) {
    switch (op) {
        case '+': console.log("Addition : ", n1 + n2);
            break;
        case '-': console.log("Subtraction : ", n1 - n2);
            break;
        case '*': console.log("Multiplication : ", n1 * n2);
            break;
        case '/': console.log("Division : ", n1 / n2);
            break;
        case '%': console.log("Modulas Division : ", n1 % n2);
            break;

        default: console.log("Please Enter Valid Operation");
    }
}