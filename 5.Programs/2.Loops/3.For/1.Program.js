const prompt = require("prompt-sync")();

// Write Js program to print 51 to 100 numbers.

// for (let i = 51; i <= 100; i++) {
//     console.log(i);
// }


// Write Js program to print even numbers from 1 to 50

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Write Js program to print 1 to 50 Odd And Even Numbers

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i, " is even");
//     }
//     else {
//         console.log(i, " is odd");
//     }
// }



//Write Js program to print 1 to 10 Numbers Sum

// var sum = 0;

// for (let i = 1; i <= 10; i++) {

//     sum = + i;
// }
// console.log(sum);

// Write Js Program To print

// var sum = 0;
// for (let i = 51; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum = +i;
//     }
// }
// console.log(sum);


// Write Js Program To print table Of number
// var n = Number.parseInt(prompt("Enter Any Number : "));

// for (let i = 1; i <= 10; i++) {

//     console.log(n * i);
// }

// var n = Number.parseInt(prompt("Enter Any Number : "));

// for (let i = 1; i <= 10; i++) {

//     console.log(n, " * ", i, " = ", n * i);
// }


// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }
// var n = Number.parseInt(prompt("Enter Any Number : "))
// var fr = 1;
// for (let i = 1; i <= n; i++) {
//     fr = fr * i;
// }

// console.log(fr);

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Laksh");
    }

    else if (i % 3 == 0 && i % 7 == 0 && i % 9 == 0) {
        console.log("Hub");
    }

    else if (i % 3 == 0 && i % 7 == 0) {
        console.log("Tech");
    }

    else {
        console.log(i);
    }

}