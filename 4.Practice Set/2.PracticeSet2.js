// 1) Write A program to print the marks of a student in an object using for loop.
// obj ={Pratik : 84,Shivam : 56,Rahul : 96,Pooja : 53,Anisha : 80}
/*
let marks = {
  Pratik: 84,
  Shivam: 56,
  Rahul: 96,
  Pooja: 53,
  Anisha: 80,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The Marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
*/

// 2) Write A program to print the marks of a student in an object using for in loop.
/*
let marks = {
  Pratik: 84,
  Shivam: 56,
  Rahul: 96,
  Pooja: 53,
  Anisha: 80,
};
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
*/

// 3)Write a program to print "try again" until the user enters the correct number.
const prompt = require("prompt-sync")();
/*
let cor_num = 10;
let i;
while (i != cor_num) {
  i = parseInt(prompt("Enter Any Number : "));
  if (i == cor_num) {
    console.log("You Have Entered Correct number \n");
  } else {
    console.log("Try Again \n");
  }
}
*/

// 4) Write a Function to find mean of 5 numbers

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
let n1, n2, n3, n4, n5;
console.log("Enter 5 Numbers : ");

n1 = parseInt(prompt());
n2 = parseInt(prompt());
n3 = parseInt(prompt());
n4 = parseInt(prompt());
n5 = parseInt(prompt());

console.log("Mean Of You Entered Number is : ", mean(n1, n2, n3, n4, n5));
