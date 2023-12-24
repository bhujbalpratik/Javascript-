

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }

// output:
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5



// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*" + "&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// Output:
// *
// *   *
// *   *   *
// *   *   *   *
// *   *   *   *   *


// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*" + "&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// Output:
// *   *   *   *   *
// *   *   *   *
// *   *   *
// *   *
// *



// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         if (i == j)
//             document.write(i)

//         else
//             document.write("*" + " &nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// Output:
// 1
// *    2
// *    *    3
// *    *    *    4
// *    *    *    *    5



// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         if (i == j)
//             document.write(i);

//         else
//             document.write("*" + "&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// Output:
// *   *   *   *   5
// *   *   *   4
// *   *   3
// *   2
// 1

var c = 1;

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(c++ + "&nbsp;&nbsp;&nbsp;");
    }
    document.write("<br>");
}

