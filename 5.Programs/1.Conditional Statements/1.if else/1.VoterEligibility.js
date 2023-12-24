const prompt = require("prompt-sync")();

let age;

age = Number.parseInt(prompt("Enter Your Age : "));

if (age >= 18) {
  console.log("Candidate eligible for voting ");
}

else {
  console.log("Candidate Not eligible for Voting !");
}
