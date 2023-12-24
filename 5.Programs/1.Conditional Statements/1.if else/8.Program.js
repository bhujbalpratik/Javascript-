const prompt = require("prompt-sync")();

let Marks = Number.parseInt(prompt("Enter Your Marks : "));

if (Marks >= 0 && Marks < 35) {
    console.log("You Are Fail Better Luck Next time !!! ");
}
else if (Marks >= 35 && Marks < 50) {
    console.log("You Are Pass With Third Class");
}
else if (Marks >= 50 && Marks < 70) {
    console.log("You Are Pass With Second Class");
}
else if (Marks >= 70 && Marks < 90) {
    console.log("You Are Pass With First Class");
}
else if (Marks >= 90 && Marks < 100) {
    console.log("You Are Pass With Destinction");
}
else {
    console.log("You Entered Invalid Marks ");
}
