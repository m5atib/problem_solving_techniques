// gcd(a,b) = gcd(b,a%b);
// O(log(max(a,b)))
// gcd(a,b) = (a * b) / lcm(a,b)
// lcm(a,b) = (a * b) / gcd(a,b)

const fib = (n, memo = {}) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
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
const LCM = (a, b) => (a / GCD(a, b)) * b;

const extendEclidean = (a, b, x = 1, y = 0) => {
  if (b === 0) {
    x = 1;
    y = 0;
    return a;
  }
  let x1, y1;
  let d = extendEclidean(b, a % b, x1, y1);
  x = y1;
  y = x1 - y1 * (a / b);
  return d;
};

const binaryGCD =  (a, b) => {
    // fast GCD aka Binary GCD
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a;
    // remove even divisors
    var sa = 0;
    while (!(a & 1)) sa++, a >>= 1;
    var sb = 0;
    while (!(b & 1)) sb++, b >>= 1;
    var p = sa < sb ? sa : sb; // Power part of 2^p Common Divisor
    // euclidean algorithm: limited only odd numbers
    while (a !== b) {// both a and b should be odd
        if (b > a) {var t = a; a = b; b = t;} // swap as a > b
        a -= b; // a is even because of odd - odd
        do a >>= 1; while (!(a & 1)); // a become odd
    }
    return a << p; // Odd-Common-Divisor * 2^p
};
console.log(GCD(15, 5));
console.log(extendEclidean(15, 5));
console.log(binaryGCD(15, 5));
console.log(GCD(36, 6));
console.log(GCD(400, 240));
console.log(GCD(24, 6));
console.log(GCD(24, 5));
console.log(LCM(7, 3));
console.log(LCM(3, 8));
