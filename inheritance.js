class SchoolName {
    constructor() {
        this.sname = "Shahid Abdur Roufe";
    }
}


class Child extends SchoolName {
    constructor(cName) {
        super();
        this.name = cName;
    }
    getSname() {
        return this.sname;
    }
}

const person = new Child("mahiya");
const person2 = new Child("Munni");
console.log(person);
console.log(person2.getSname());