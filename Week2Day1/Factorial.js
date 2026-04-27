function factorial(n) {

    if (n < 0) {
        return "Given input is invalid";

    }
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}


console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(-8));

