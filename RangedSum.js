
const setRanges = (s, e, val, arr) => {
  if (s < 0 || e < 0 || e < s) return;
  arr[s] += val;
  arr[e + 1] -= val;
};
const rangeSum = (inceArr, arr) => {
  for (let item of inceArr) {
    setRanges(item[0], item[1], 1, arr);
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
};

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let ince = [
  [3, 5],
  [2, 4],
];

rangeSum(ince, arr);
console.log(arr);

//https://codeforces.com/problemset/problem/816/B
