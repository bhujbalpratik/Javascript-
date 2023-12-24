const prompt = require("prompt-sync")();

let Marks = Number.parseInt(prompt("Enter Your Marks : "));

if (Marks >= 0 && Marks < 35) {
    console.log("You are Fail");
}

if (Marks >= 35 && Marks <= 100) {
    console.log("You are Pass");
}

if (Marks < 0 || Marks > 100) {
    console.log("Invalid Marks");
}




