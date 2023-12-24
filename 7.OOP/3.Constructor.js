class myclass {
    constructor(name, Regn, Add) {
        this.Name = name;
        this.RegNo = Regn;
        this.Address = Add;
    }

    showInfo() {
        console.log("My name is ", this.Name, " I am from ", this.Address, " My Register Number is ", this.RegNo);
    }
}

var obj = new myclass("Pratik", 123, "Ch.Sambhajinagar");
obj.showInfo();