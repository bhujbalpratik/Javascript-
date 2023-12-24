
const prompt = require("prompt-sync")();

function Area(r) {

    var result = 3.14 * r * r;

    console.log(result);
}



var Num = Number.parseInt(prompt("Enter Radius : "));

Area(Num);