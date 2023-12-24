
const prompt = require("prompt-sync")();

let name = prompt("Enter Any String : ");

if (name == "Laksh" || name == "laksh") {
    console.log("Valid Username");
}
else {
    console.log("Invalid Username");
}


