const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const combinations = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

const permutaions = (n, r) => {
  return factorial(n) / factorial(n - r);
};

const test1 = permutaions(4, 1);
console.log("🚀 ~ file: CombinationVsPermutation.js ~ line 15 ~ test1", test1);
const test2 = permutaions(2, 3);
console.log("🚀 ~ file: CombinationVsPermutation.js ~ line 17 ~ test2", test2);

const find_comb = (res, temp, ind, st, end, k) => {
  if (ind == k) {
    res.push(temp);
    return;
  }
  for (let i = st; i < end && end - i + 1 >= k - ind; i++) {
    temp[ind] = i + 1;
    find_comb(res, temp, ind + 1, i + 1, end, k);
  }
}

let n =4 , k=2;
res = [];
temp = [];
for (let i = 0; i < k; i++) {
    temp[i] = 0;
}


find_comb(res,temp,0,0,n,k);
console.log(res.length);