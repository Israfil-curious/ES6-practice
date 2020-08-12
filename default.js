function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}

// old version

function add(num1, num2) {
    num2 = num2 || 20;
    return num1 + num2;
}

// ES6 or newer
function add(num1, num2 = 0) {
    return num1 + num2;
}