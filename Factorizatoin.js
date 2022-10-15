const fastFactors = (n) => {
  let factors = {};

  for (let i = 1;  i* i <= n ; i++) {
    if (n % i === 0) {
      factors[i] = i;
      if (i*i !== n) {
        factors[n/i] = n/i;
      }
    }
    //console.log(i);
  }

  return factors;
};

const iterativeFactors = (n) => {
    let factors = {};
  
    for (let i = 1;  i<= n ; i++) {
      if (n % i === 0) {
        factors[i] = i;
        
      }
      //console.log(i);
    }
  
    return factors;
  };

const printArray = (arr) => {
  for (let i in arr) {
    console.log(arr[i], " ");
  }
};

const f1 = fastFactors(4000000000);
//const f2 = iterativeFactors(40000);
console.log(f1)
//console.log(f2)
//printArray(ff)
//printArray(ff.sort((a,b) => a - b))
