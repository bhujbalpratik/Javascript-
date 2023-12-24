// Two types of function declration

// With keyword function

function add(x, y) {
  return x + y;
}
let a = 10;
let b = 20;
let n1 = 34;
let n2 = 66;

document.write("Addition of " + a + " and " + b + " is : ", add(a, b) + "<br>");

document.write(
  "Addition of " + n1 + " and " + n2 + " is : ",
  add(n1, n2) + "<br>"
);

// With keyword const and Arrow(=>) (Arrow Function)
/*
const sum = (x, y) => {
  return x + y;
};

document.write("Sum of 10 and 20 is ", sum(10, 20));
*/
