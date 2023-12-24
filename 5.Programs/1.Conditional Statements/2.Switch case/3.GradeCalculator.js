const prompt = require("prompt-sync")();
let marks;
marks = Number.parseInt(prompt("Enter Your Marks : "));
let grade;
switch (true) {
  case marks >= 90 && marks <= 100:
    grade = "A+";
    break;
  case marks >= 80 && marks < 90:
    grade = "A";
    break;
  case marks >= 70 && marks < 80:
    grade = "B+";
    break;
  case marks >= 60 && marks < 70:
    grade = "B";
    break;
  case marks >= 60 && marks < 70:
    grade = "C+";
    break;
  case marks >= 40 && marks < 60:
    grade = "C";
    break;
  default:
    grade = "F";
    break;
}
console.log("Your Grade is : ", grade);
