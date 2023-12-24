const prompt = require("prompt-sync")();

var Ary1 = [10, 20, 30, 40, 50];

var Ary2 = [100, 200, 300, 400, 500];

var Tmp = [];

console.log("Before Array Element Of A");

for (let i = 0; i < 5; i++) {
    console.log(Ary1[i]);
}

console.log("Before Array Element Of B");

for (let i = 0; i < 5; i++) {
    console.log(Ary2[i]);
}


// for (let i = 0; i < 5; i++) {
//     Tmp[i] = Ary2[i];
// }

// for (let i = 0; i < 5; i++) {
//     Ary2[i] = Ary1[i];
// }

// for (let i = 0; i < 5; i++) {
//     Ary1[i] = Tmp[i];
// }

for (var i = 0; i < 5; i++) {

    Ary1[i] = Ary1[i] + Ary2[i];

    Ary2[i] = Ary1[i] - Ary2[i];

    Ary1[i] = Ary1[i] - Ary2[i];
}

console.log("After Array Element Of A");

for (let i = 0; i < 5; i++) {
    console.log(Ary1[i]);
}

console.log("After Array Element Of B");

for (let i = 0; i < 5; i++) {
    console.log(Ary2[i]);
}














