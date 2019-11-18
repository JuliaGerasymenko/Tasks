'use strict';

function seiveBlocks(n) {
  let primes = new Array();
  let nPrimes = new Array(n + 1).fill(false);
  nPrimes[0] = true;
  nPrimes[1] = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!nPrimes[i]) {
      primes.push(i);
      for (let j = i * i; j <= Math.sqrt(n); j += i) {
        nPrimes[j] = true;
      }
    }
  }

  let blockSize = 3;
  for (let k = 0; k < Math.ceil(n / blockSize); k++) {
    for (let i = 2; i < blockSize + 2; i++) {
      for (let prime = 0; prime < primes.length; prime++) {
        if (k * blockSize + i <= n && !nPrimes[k * blockSize + i]) {
          let compare = k * blockSize + i - 1;
          let p =
            compare >= blockSize - 1
              ? Math.floor(compare / primes[prime]) + 1
              : i;
          p = p * primes[prime];
          for (; p <= blockSize * (k + 1) + 1; p += primes[prime])
            nPrimes[p] = true;
        }
      }
    }
  }

  let result = 0;
  nPrimes.forEach((el, i) => {
    if (!el) result += i;
  });
  return result;
}

console.log(seiveBlocks(6));
