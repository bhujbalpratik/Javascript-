// var random1 = Math.floor(Math.random() * 6) + 1;

// var randomimg1 = "dice" + random1 + ".png";

// var imgsource1 = "images/" + randomimg1;

// var img1 = document.querySelectorAll("img")[0];

// img1.setAttribute("src", imgsource1);

// var random2 = Math.floor(Math.random() * 6) + 1;

// var randomimg2 = "dice" + random2 + ".png";

// var imgsource2 = "images/" + randomimg2;

// var img2 = document.querySelectorAll("img")[1];

// img2.setAttribute("src", imgsource2);

// if (random1 > random2) {
//     document.querySelector("h1").innerHTML = "PLayer 1 Wins";
// }
// else if (random2 > random1) {
//     document.querySelector("h1").innerHTML = "PLayer 2 Wins";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw";
// }


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
