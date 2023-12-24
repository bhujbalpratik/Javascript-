const prompt = require("prompt-sync")();

let ch = prompt("Enter Any Character in between r,g,b,y,w : ")

switch (ch) {

    case 'r':
    case 'R':
        console.log("Red");
        break;

    case 'g':
    case 'G':
        console.log("Green");
        break;

    case 'b':
    case 'B':
        console.log("Blue");
        break;

    case 'y':
    case 'Y':
        console.log("Yellow");
        break;

    case 'w':
    case 'W':
        console.log("White");
        break;

    default:
        console.log("Please Enter Character in between r,g,b,y,w");
        break;
}

