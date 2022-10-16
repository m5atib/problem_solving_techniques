const add = (a, b, m = 1000000007) => ((a % m) + (b % m)) % m;
const mul = (a, b, m = 1000000007) => ((a % m) * (b % m)) % m;
const sub = (a, b, m = 1000000007) => ((a % m) - (b % m) + m) % m;
const binaryExponentiation = (x, n) => {
  result = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      result = result * x;
    }
    x = x * x;
    n = n / 2;
  }
  return result;
};
const modularExponentiation = (x, n, m) => {
  result = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      result = (result * x) % m;
    }
    x = (x * x) % m;
    n = n / 2;
  }
  return result;
};
const modularExponentiation_lastmodified = (x, n, m) => {
  result = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      result = mul(result, x, m);
    }
    x = mul(x, x, m);
    n = n / 2;
  }
  return result;
};
const extendedEuclid_recursive = (a, b, x, y) => {
  if (b == 0) {
    x = 1;
    y = 0;
    return a;
  }
  x1, y1;
  d = extendedEuclid_recursive(b, a % b, x1, y1);
  x = y1;
  y = x1 - y1 * (a / b);
  return d;
};
const modMulInv = (a, b, c, m) => {
  let aPowBModM = modularExponentiation_lastmodified(a, b, m);
  let x,y;
  extendedEuclid_recursive(c,m,x,y);
  x = (x%M+M)%M;
  let c_inv = x;
  return ((aPowBModM) * (c_inv%M))%M;
};
