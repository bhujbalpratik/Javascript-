const prompt = require("prompt-sync")();
// 1)What will following print in javascript !
// console.log("Pra\"".length);
/*
let str = 'Pra"';
console.log(str.length);
*/

// 2)Explore the includes,Starts with and Ends with functions of a string.
// Includes
/*
const sentence = "The quick bown fox jumps over the lazy dog";
let word = prompt("Enter Any Word : ");
console.log(
  `The Word "${word}" ${
    sentence.includes(word) ? `is` : `is not`
  } in the sentence`
);
*/
// Starts with
/*
const str = "To be, or not to be, that is the question.";
console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
*/

// Ends with
/*
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!")); // Expected output: true
console.log(str1.endsWith("best", 17)); // Expected output: true
const str2 = "Is this a question?";
console.log(str2.endsWith("question")); // Expected output: false
*/

// 3)Write a program to convert given string to lowercase string="PRATIK"
/*
let str = "PRATIK";
console.log(
  "Before string :",
  str,
  " | ",
  "Converted String :",
  str.toLowerCase()
);
*/

// 4)Extract the amount out of this string , string="Please give rs 1000".
/*
let str = "Please give rs 1000";
let amt = Number.parseInt(str.slice(15));
console.log(amt);
*/

// 5)Try to change 4th character of a given string were you able to do it ? string="PRATIK"

let str = "PRATIK";
console.log(str.replace("T", "N"));
