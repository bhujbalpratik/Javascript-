// Delete Method
// It Delete Element and empty space in array.
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);
*/

// Array Concatination
//  It concat two and more arrays in one array.
/*
let A1 = [1, 2, 3, 4, 5];
let A2 = [11, 12, 13, 14, 15];
let A3 = [21, 22, 23, 24, 25];
let A4 = A1.concat(A2, A3);
console.log(A4);
*/

// Sort Method.
// It sort Alphabetically.
//  But Using compare Function we can sort it Asending and Desendibng Order.
/*
const cmp = (a, b) => {
  return b - a; //(a-b) Asending Order (b-a) Descending Order.
};
let Ary = [228, 65, 87, 55, 12, 77, 36, 9, 48];
Ary.sort(cmp);
console.log(Ary);
*/

// Reverse Method
//  It Reverse Your Array.
/*
let Ary = [1, 2, 3, 4, 5];
console.log(Ary.reverse());
*/

// Splice Method
/*
let Ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before Array : ", Ary);
let r = Ary.splice(2, 3, 33, 44, 55, 66, 77);
// ArrayName.splice(index,DeleteElements, Adding Elements)
// And Return Deleted Values
console.log("Spliced Array : ", Ary);
console.log("Return Values : ", r);
*/

// Slice Method
let Ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let NewAry = Ary.slice(2, 5); // IT includes 2-5 index Numbers Elements.
console.log(NewAry);
