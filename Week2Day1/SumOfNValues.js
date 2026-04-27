function SumOfNum(n){

    let sum =0;
    for (let i = 1; i<= n; i++) {
        sum +=i;

        console.log(i + " => " + sum);
        
    }
return sum;
}

console.log(SumOfNum(4));//10
