//it takes O(log n) time to calculate the power n of value x
const fastPower = (x, n) => {
    let base = x;
    let power = n;
    let result = 1;
    while (power > 0){
        if (power % 2 == 0){
            power = Math.floor(power/2);
            base = base * base
        }else{
            power = power - 1
            result = result * base
            power = Math.floor(power/2);
            base = base * base

        }
    }
    return result;
};

const iterativePower = (x , n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result*=x;
    } 
    return result
}

//U CAN USE THE MOD 10^9 + 7 IF U WANT THAT 
console.log(fastPower(3,10));
console.log("   _____________________   ")
//console.log(iterativePower(3,204));

