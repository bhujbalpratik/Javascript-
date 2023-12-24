
const a = {
    name: "Pratik",
    language: "Javascript",
    run: () => {
        console.log("Self Run");
    }
}
console.log(a);

const p = {
    run: () => {
        console.log("Run");
    }
}

a.__proto__ = p

p.run()