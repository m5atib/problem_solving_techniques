"use strict";

let a, b, c, d;
let MOD = 1000000007;
function FastDoubling(n, res) {
  if (n == 0) {
    res[0] = 0;
    res[1] = 1;
    return;
  }
  FastDoubling(parseInt(n / 2, 10), res);
  a = res[0];
  b = res[1];

  c = 2 * b - a;

  if (c < 0) c += MOD;
  c = (a * c) % MOD;
  d = (a * a + b * b) % MOD;
  if (n % 2 == 0) {
    res[0] = c;
    res[1] = d;
  } else {
    res[0] = d;
    res[1] = c + d;
  }
}
const binaryGCD = (a, b) => {
  // fast GCD aka Binary GCD
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a;

  var sa = 0;
  while (!(a & 1)) sa++, (a >>= 1);
  var sb = 0;
  while (!(b & 1)) sb++, (b >>= 1);
  var p = sa < sb ? sa : sb;

  while (a !== b) {
    if (b > a) {
      var t = a;
      a = b;
      b = t;
    }
    a -= b;
    do a >>= 1;
    while (!(a & 1));
  }
  return a << p;
};
const GCD = (aa, bb) => {
  let a = aa,
    b = bb;
  let temp = 0;
  while (b !== 0) {
    temp = a;
    a = b;
    b = temp % b;
  }
  return a;
};
// O(log(max(a,b)))
const calcGCD = (a, b) => {
  if (a && b) while ((a %= b ^= a ^= b ^= a));
  return a + b;
};
const LCM = (a, b) => (a / binaryGCD(a, b)) * b;

function solve(f) {
  let l = 1;
  for (let i = 0; i < f.length; i++) {
    let res = new Array(2);
    res.fill(0);
    FastDoubling(f[i], res);
    l = LCM(res[0], l);
  }

  return l;
}
function readLine() {
  return inputString[currentLine++];
}
const fs = require("fs");
let inputString = "";
let currentLine = 0;
function main() {
  let f = [];
  let l = 1;
  console.log(calcGCD(24, 8));
  fs.readFile("input.txt", (err, inputD) => {
    if (err) throw err;
    inputString = inputD.toString().split("\n");
    const fCount = parseInt(readLine().trim(), 10);
    for (let i = 0; i < fCount; i++) {
      const fItem = parseInt(readLine().trim(), 10);
      let res = new Array(2);
      res.fill(0);
      FastDoubling(fItem, res);
      console.log("l : ", l, " res[0] : ", res[0]);
      l = LCM(res[0] % MOD, l) % MOD;

      //f.push(fItem);
    }

    //const result = solve(f);
    console.log(l);
  });
}

main();

// if (249 460 701 < 894 379 816) {
//     console.log("🚀 ~ file:");
// }
