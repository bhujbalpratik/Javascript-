
const prompt = require("prompt-sync")();

let Ary = [];

for (let i = 0; i < 10; i++) {

    i == 0 ? Ary[i] = i : Ary[i] = i + 10;
}
for (let i = 0; i < 10; i++) {
    console.log("Ary[", i, "]=", Ary[i]);
}




