
// 

const prompt = require('prompt-sync')();

const ReverseString = (inp_Str) => {
    let revStr = "";
    for (let i = inp_Str.length - 1; i >= 0; i--) {
        revStr += inp_Str[i];
    }
    return revStr;
}


let str = prompt("Enter Any String : ");

let reversed = ReverseString(str);
console.log(reversed); 
