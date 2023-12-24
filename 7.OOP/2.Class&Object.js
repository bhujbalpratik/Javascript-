
const prompt = require("prompt-sync")();

class myclass {

    getName() {
        this.Name = prompt("Enter Your Name : ");
    }

    showName() {
        console.log("My name is : ", this.Name);
    }
}

let obj = new myclass();

obj.getName();

obj.showName();


