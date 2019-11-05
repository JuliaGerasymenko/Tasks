'use strict';

function seiveOriginal(n) {
  let primes = new Array(n - 1).fill(true);
  [primes[0], primes[1]] = [false, false];
  for (let i = 2; i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      primes[j] = false;
    }
  }

  primes.forEach((el, i) => {
    if (el) console.log(i);
  });
}

function blocksSeive(n) {
  let nPrime = new Array(n).fill(false);
  let primes = [];
  const sqrt = Math.sqrt(n);
  for (let i = 2; i < sqrt; i++) {
    if (!nPrime[i]) {
      primes.push(i);
      for (let j = i * i; j < n; j += i) {
        nPrime[j] = true;
      }
    }
  }

  const s = 6;
  let result = 0;
  let nonPrime = new Array(s);

  for (let k = 0; k <= Math.floor(n / s); k++) {
    nonPrime.fill(false);
    for (let i = 0; i < primes.length; i++) {
      let start_id = (s * k) / primes[i];
      if (start_id !== Math.floor(start_id))
        start_id = Math.floor(start_id) + 1;
      let j = Math.max(start_id, 2) * primes[i] - k * s;
      for (; j < s; j += primes[i]) {
        nonPrime[j] = true;
      }
    }
    if (!k) [nonPrime[0], nonPrime[1]] = [true, true];

    nonPrime.forEach((el, i) => {
      if (!el && k * s + i <= n) result += 1;
    });
  }
  console.log(result);
}

// seiveOriginal(36);
// blocksSeive(36);
