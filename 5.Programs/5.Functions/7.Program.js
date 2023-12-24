
const prompt = require("prompt-sync")();

Even();

function Even() {

    var Ary = [];


    var Size = Number.parseInt(prompt("How many Numbers Do you want to enter : "));

    for (var i = 0; i < Size; i++) {
        Ary[i] = Number.parseInt(prompt("Enter " + (i + 1) + " Number : "));

    }

    var c = 0;

    var r = 0;

    for (var i = 0; i < Size; i++) {
        // if (Ary[i] % 2 == 0) {
        //     c++;
        // }

        (Ary[i] % 2 == 0) ? c++ : r++;


    }

    console.log("You Entered Even Number Is : ", c);
}



