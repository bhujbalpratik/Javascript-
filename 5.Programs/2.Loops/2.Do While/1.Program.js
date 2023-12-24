// var num;
// var ec = 0;
// var oc = 0;

// do {
//     num = Number.parseInt(prompt("Enter Any Number : "));
//     if (num % 2 == 0) {
//         ec++;
//     }
//     else {
//         oc++;
//     }
// } while (confirm("Do You want To Enter More Number "));

// document.write("Total Even Numbers : ", ec, "<br>");

// document.write("Total Odd Numbers : ", oc, "<br>");


var TM = 0;
var CM = 0;
var KM = 0;

do {
    var vote = Number.parseInt(prompt("Select Your Vote For Mahal : ", 4));
    if (vote == 1) {
        TM++;
    }
    else if (vote == 2) {
        CM++;
    }
    else if (vote == 3) {
        KM++;
    }

    else if (vote == 4) {
        break;
    }
    else {
        alert("Please Enter Valid Vote");
    }

} while (true);

document.write("Total Votes For Taj Mahal : ", TM, "<br>");
document.write("Total Votes For Chand Bibi Mahal : ", CM, "<br>");
document.write("Total Votes For Kawab Mahal : ", KM, "<br>");