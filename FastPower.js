//it takes O(log n) time to calculate the power n of value x
const fastPower = (x, n) => {
    let base = x;
    let power = n;
    let result = 1;
    while (power > 0){
        if (power % 2 == 0){
            power = Math.floor(power/2);
            base = base * base
            console.log("even fastPower")
        }else{
            power = power - 1
            result = result * base
            power = Math.floor(power/2);
            base = base * base
            console.log("odd fastPower")

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
console.log(fastPower(3,10));
console.log("   _____________________   ")
//console.log(iterativePower(3,204));
