const nam = "sophia";
const name1 = "sophia";
const fullName = name1 + nam;
console.log(fullName);

// ES6 version

const name2 = "karolina";
const name3 = "dianna";
const fullName2 = `${name2}${" "}${name3} bangladesh`;
console.log(fullName2);

// multi line string

const string = "i love\n" +
    "my country\n" +
    "bangladesh"
console.log(string);

//ES6 version 

const multiLineString = `i love my country
bangladesh`;
console.log(multiLineString);


// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

// ESC Arrow Function

const doubleIt = num => num * 2;
const add = (num, num1) => num + num1;
const give5 = () => 5;

var result2 = give5();
console.log(result2);

var result1 = add(5, 20);
console.log(result1);

var result = doubleIt(5);
console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
var result3 = doMath(10, 5);
console.log(result3);