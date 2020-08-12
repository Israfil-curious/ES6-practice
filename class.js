class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.age = "30";
    }
}

const student = new Student(2030, "Mahiya");

console.log(student);

console.log(student.name);