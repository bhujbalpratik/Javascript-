// let name = "Pratik";
/*
// Calculate size/Length of string
console.log(name.length);

//Character Converts into Uppercase (Capital letters)
console.log(name.toUpperCase()); 

//Character Converts into Lowercase (Small letters)
console.log(name.toLowerCase());

//It Prints 0-6 characters in String 
console.log(name.slice(0, 6));

//It prints 2-Last character in string 
console.log(name.slice(2));

//It Replace Characters in String 
console.log(name.replace("Pra", "Kar"));
*/

// String Concatation
/*
let friend = "Rahul";
console.log(name.concat(" is a friend of ", friend)); //It Concat One String to another string

let friend2 = "      Anisha      ";
console.log(friend2);
console.log(friend2.trim()); //It trim  string and remove bulk spaces
*/

// Strings Are Immutable
// We can access strings using an index
// let c = "computer";
/*
console.log(c[0]);          
console.log(c[2]);
console.log(c[3]);
*/
// Using for loop we can access string characters
/*
for (let i = 0; i < 8; i++) {
  console.log(c[i] + "\n");
}
*/
// let v = "Vishakha";
// for (let i = 0; i < 8; i++) {
//   console.log(v[i]);
// }

// includes method
// const prompt = require("prompt-sync")();
// const sentence = "The quick bown fox jumps over the lazy dog";
// let word = prompt("Enter Any Word : ");
// console.log(
//   `The Word "${word}" ${
//     sentence.includes(word) ? `is` : `is not`
//   } in the sentence` // It check condition and return true/false .

// Starts With
/*
const str = "To be, or not to be, that is the question.";
console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
*/
//  It check starting of string and returns true/false.

// Ends with
/*
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
// Expected output: true
console.log(str1.endsWith("best", 17));
// Expected output: true
const str2 = "Is this a question?";
console.log(str2.endsWith("question"));
// Expected output: false
*/
// It check Ending of string and returns true/false

// Strings are immutable strings cannot be change.


// Replace

let str = "Hello Laksh Laksh Laksh Tech Hub";

console.log(str.replace("Laksh", "Pratik"));//replace for replace strings 

console.log(str.replaceAll("Laksh", "Pratik"));//replaceAll

