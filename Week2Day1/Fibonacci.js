function fibonacci(n){

    if(n < 0){
        return "Given input is invalid";
    }

    let a = 0;
    let b = 1;

    if(n === 0) {
        return a;
    }
    if(n === 1) {
        return b;
    }

    for(let i = 2; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibonacci(0)); //0 
console.log(fibonacci(1)); //1
console.log(fibonacci(5)); //5
console.log(fibonacci(7)); //13