// Conditional Statements 



// Problem 1
// Use Logical Operators to find whether the age of person lies between 10 & 20.
/*
 let age;
 age=prompt("What is your age ?");
 age=Number.parseInt(age);
 if (age>=10 && age<=20) {
     alert("A Person lies between age 10 & 20");
 }
 else{
     alert("A Person does not lies between age 10 & 20")
 }
*/



//  Problem 2
// Demonstrate the use of switch case statements in Javascript.
/*
let age;
 age=prompt("What is your age ?");
 age=Number.parseInt(age);
 switch (age) {
    case 12:
        alert("Your Age is 12");
        break;
    case 14:
        alert("Your Age is 14");
        break;
    case 16:
        alert("Your Age is 16");
        break;
    case 18:
        alert("Your Age is 18");
        break;
    case 20:
        alert("Your Age is 20");
        break;
    default:
        alert("Your Age is Not Special")
        break;
 }
*/



// Problem 3
// Write Javascript program to find whether a number is divisible by 2 & 3.
/*
let num;
num = prompt("Enter Any Number ");
num = Number.parseInt(num);
if (num%2==0 && num%3==0) {
    alert("Number is Divisible by 2 & 3");
}
else{
    alert("Number is Not Divisible by 2 & 3");
}
*/



// Problem 4
// Write Javascript program to find whether a number is divisible by either 2 or 3.
/*
let num;
num = prompt("Enter Any Number ");
num = Number.parseInt(num);
if (num%2==0 || num%3==0) {
    alert("Number is Divisible by 2 or 3");
}
else{
    alert("Number is Not Divisible by 2 or 3");
}
*/



// Problem 5
// Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.

let age;
age=prompt("What is your age ?");
age=Number.parseInt(age);
let a = age > 18 ? "You can Drive" : "You cannot Drive";
alert(a);

