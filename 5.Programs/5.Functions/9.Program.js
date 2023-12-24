// sayHello();

// const sayHello = () => {
//     console.log("Hello");
// };

const prompt = require("prompt-sync")();

const sayHello = (n) => {
    console.log(n);
};

let Num = +(prompt("Enter Any Number : "));

console.log(typeof (Num));

sayHello(Num);
