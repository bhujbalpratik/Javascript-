// Print 1 to 10 digits in reverse order.
/*
n = 10;
while (n >= 1) {
  document.write(n + "<br>");
  n--;
}
*/

// Print Table of 5 in reverse order
/*
n = 50;
while (n >= 5) {
  document.write(n + "<br>");
  n = n - 5;
}
*/

// Enter Any Number and print to that number Index numbers.
let n = prompt("Enter Any Number");
n = Number.parseInt(n);
i = 0;
while (n > i) {
  document.write(i + "<br>");
  i++;
}
