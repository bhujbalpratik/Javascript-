// Promise
// --> A promise is an object representing the eventual completion or failure of asynchronous operations.

// new Promise()
// --> A javascript promise object contains both the producing code and calls to the consuming code. It can be used to deal with Asynchronous operation in Javascript.
// --> 3 States of promises
//  -> Pending
//  -> Fulfilled/Resolvedm ==> .then(),.finally()
//  -> Rejected ==> .then(),.catch(),.finally()

// .then() ==> .then() is a method used to handle the successful outcome of a promise in javscript. it takes 2 arguments : (onFullfilled,onRejected)

// .catch() ==> .catch method returns a promise and deals with rejected case only.

// Example 1
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is an even number.`);
    } else {
      reject(`${num} is an odd number.`);
    }
  });
}
const number = 4;
checkNumber(number)
  .then((msg) => console.log(`${msg}`))
  .catch((msg) => console.log(`${msg}`));
