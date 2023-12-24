// Write A Javascript Program to genrate Random number and store it in a variable and store it in avariable. The program then takes an input from the user to tell them whether the guess was correct greater or lesser than the original number .
// 100 -(no. of guesses ) is the score of the user the program is expected to terminate once the number is guessed nu. Number Should be between 1 to 100.


const prompt = require("prompt-sync")();
// Random Number Genration 
const min = 0;
const max = 100;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
let Rdm_Num = randomInt;

let Usr_Num;

let chances = 0;

console.log("Computer Genrate Random Number");

console.log("Guess The Number Between 0 to 100 ");

console.log("And Put it on input ");

do {

    Usr_Num = Number.parseInt(prompt());

    if (Usr_Num >= 0 && Usr_Num <= 100) {

        if (Usr_Num == Rdm_Num) {

            console.warn("\n\n\n\n CONGRATULATIONS You Guessed Correct Number !!! \n");

        }

        else if (Usr_Num < Rdm_Num) {

            console.error("\nThat Number is greater than ", Usr_Num, "\n");

        }

        else {

            console.error("\nThat Number is less than ", Usr_Num, "\n");

        }


    }
    else {

        console.error("\nPlease Enter Number between 0 to 100 \n");
    }

    chances++;

} while (Usr_Num != Rdm_Num);

console.log("\n");
console.log("\n");

console.log("Correct Number : ", Rdm_Num, "\n");

console.log("You guess Number in ", chances, " chances \n");

console.log("Your Score Is : ", 100 - chances, "\n");


