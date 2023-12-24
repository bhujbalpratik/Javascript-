let c12_marks = [91, 82, 63, 84, false, "Not Present"];
console.log(c12_marks[0]);
console.log(c12_marks[1]);
console.log(c12_marks[2]);
console.log(c12_marks[3]);
console.log(c12_marks[4]);
console.log(c12_marks[5]);
console.log(c12_marks[6]); //Will be Undefined because index 7th Member does not exist.
console.log("The Length of Given Array is : ", c12_marks.length); //Length Function calculate our array's length
c12_marks[6] = 89; //Adding New Member by using index
c12_marks[0] = 96; //Changing the value of an array
// Arrays are Mutable Arrays will be change
console.log(c12_marks);
console.log(typeof c12_marks);
