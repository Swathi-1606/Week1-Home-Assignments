function factorial(n: number): number {

    // check to ensure that the factorial is not computed for negative numbers.
    if (n < 0) {
        throw new Error("Negative numbers are not allowed");
    }

    let result = 1;

    // loop from 2 to n
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// Example calls
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(7));

// negative input
console.log(factorial(-3));
