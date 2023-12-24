const prompt = require("prompt-sync")();

let Num = Number.parseInt(prompt("Enter Any Number : "))

if (Num % 3 == 0 && Num % 5 == 0) {
    console.log("You Entered Number Is Divisible By 3 & 5");
}

else {
    console.log("You Entered Number Is Not Divisible By 3 & 5");
}

