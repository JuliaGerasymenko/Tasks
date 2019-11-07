'use strict';


function seiveOriginal(n) {
  let primes = [];
  let nPrime = new Array(n + 1).fill(false);
  nPrime[0] = true;
  nPrime[1] = true;
  for (let i = 2; i <= n; i++) {
    if (!nPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) {
        nPrime[j] = true;
      }
    }
  }
  return primes;
}

function blocksSeive(n) {
  const sqrt = Math.sqrt(n);
  const primes = seiveOriginal(sqrt);
  const s = 6;
  let result = 0;
  let nonPrime = new Array(s);

  for (let k = 0; k <= Math.floor(n / s); k++) {
    nonPrime.fill(false);
    for (let i = 0; i < primes.length; i++) {
      let start_id = Math.floor((s * k - 1) / primes[i]) + 1;
      let j = Math.max(start_id, 2) * primes[i] - k * s;
      for (; j < s;j += primes[i]) nonPrime[j] = true;
    }

    if (!k) {
      nonPrime[0] = true;
      nonPrime[1] = true;
    }

    nonPrime.forEach((el, i) => {
      if (!el && k * s + i <= n) {
        result += 1;
      }
    });
  }
  return result;
}

seiveOriginal(36);
blocksSeive(36);
