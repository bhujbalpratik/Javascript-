const hover = (x, y) => {
    x.style.backgroundColor = "rgba(216,165,66,0.5)";
    x.style.rotate = "45deg";
    x.style.borderRadius = "0px";
    // x.style.transition = "1s";
    y.style.rotate = "-45deg";

}

const out = (x, y) => {
    y.style.rotate = "0deg";
    // x.style.borderRadius = "50%";
    x.style.rotate = "0deg";
    x.style.backgroundColor = "rgba(126, 109, 66, 0.5)";
}

var i = 0;
var stopi = setInterval(function () {
    document.getElementsByClassName("num")[0].innerHTML = i;
    i++;
    if (i == 101) {
        clearInterval(stopi);
    }
}, 20);

var j = 0;
var stopj = setInterval(function () {
    document.getElementsByClassName("num")[1].innerHTML = j;
    j++;
    if (j == 86) {
        clearInterval(stopj);
    }
}, 20);

var k = 10467;
var stopk = setInterval(function () {
    document.getElementsByClassName("num")[2].innerHTML = k.toLocaleString();
    k++;
    if (k == 10568) {
        clearInterval(stopk);
    }
}, 20);

var l = 799;
var stopl = setInterval(function () {
    document.getElementsByClassName("num")[3].innerHTML = l;
    l++;
    if (l == 901) {
        clearInterval(stopl);
    }
}, 20);