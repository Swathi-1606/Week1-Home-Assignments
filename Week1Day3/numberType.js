function numberType(num) {
    if (num > 0) {
        return num + " is greater than zero";
    } else if (num < 0) {
        return num + " is less than zero";
    } else {
        return num + " is zero";
    }
}
let num = 9;
console.log(numberType(num));
