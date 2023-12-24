
color();

function color() {

    var Ary = [];

    var i = 0;

    do {
        Ary[i] = prompt("Enter Any Color : ");
        i++;
    } while (confirm("Want To Add More Color"));

    for (i = 0; i < Ary.length; i++) {
        document.write(Ary[i], "<br>");
    }
}