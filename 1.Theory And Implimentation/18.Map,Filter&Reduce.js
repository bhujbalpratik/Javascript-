// Map Method
/*
let Ary = [45, 23, 21];
// console.log(Ary);
let a = Ary.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);//Return Value
*/

// Filter Method
/*
let Ary = [45, 23, 21, 0, 3, 5];
let a = Ary.filter((a) => {
  return a < 10;
});
console.log(a);
*/

// Reduce Method
let Ary = [85, 69, 75, 73, 89];
const reduce_func = (h1, h2) => {
  return h1 + h2; //{1+2}+{3+3}+{6+5}+{11+2}+{13+1} Ans=14.
};
let newAry = Ary.reduce(reduce_func);
console.log(newAry);

