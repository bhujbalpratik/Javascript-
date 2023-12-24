// forEach(callbackfunction)

// const colors = ["red", "green", "blue", "yellow"];

// colors.forEach((color) => console.log(color));

const words = ["hello", "bird", "table", "football", "cricket"];

const capWords = words.forEach((word, index, arry) => {
  arry[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);
