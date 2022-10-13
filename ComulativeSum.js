const comulativeSum = (arr) => {
    if (!arr || arr === undefined || arr.length < 0 ) return [];
    let temp = [];
    temp[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        temp[i] = temp[i-1] + arr[i];
    }
    return temp;
}
const rangeQuery = (start, end , comulativeArr) => {
    
    if (end < start) return 0;
    if (start === 0) return comulativeArr[end];
    if (end === 0) return comulativeArr[start];

    return comulativeArr[end] - comulativeArr[start-1];
}

const arr = [1,3,5,9,12]
const comArr = comulativeSum(arr)
console.log("🚀 ~ file: MyTemplate.js ~ line 20 ~ comArr", comArr)
console.log("--------------------------------------------------------")
console.log(rangeQuery(0,0,comArr));
console.log(rangeQuery(0,1,comArr));
console.log(rangeQuery(2,4,comArr));
console.log(rangeQuery(4,4,comArr));

//https://codeforces.com/problemset/problem/363/B