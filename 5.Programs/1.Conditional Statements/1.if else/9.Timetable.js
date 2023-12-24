const prompt = require("prompt-sync")();

let t = Number.parseInt(prompt("Enter Your Time between 1 to 24 : "));

if (t >= 7 && t < 9)
    console.log("Breakfast Time");
else if (t >= 9 && t < 12)
    console.log("Practical Time");
else if (t >= 12 && t < 17)
    console.log("College Time");
else if (t >= 17 && t < 20)
    console.log("Class Time");
else if (t >= 20 && t < 22)
    console.log("Watch Tv");
else if (t >= 22 && t < 24)
    console.log("Study Time");
else if (t <= 24 || t <= 7)
    console.log("Sleeping Mode");
else
    console.log("Invalid Time");

