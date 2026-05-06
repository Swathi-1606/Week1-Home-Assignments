function fibonacci(n: number): number {

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, result = 0;

    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;

}

// Example calls
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
