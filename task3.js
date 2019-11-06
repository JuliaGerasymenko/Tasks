'use strict';

let primes = [];

function seiveOriginal(n) {
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
}

function getPower(divider, i, power, n) {
  while (n%divider === 0) {
    n/=divider;
    power[i]++;
  }
}

function factorization(n) {
  seiveOriginal(36);
  const len = primes.length;
  let power = new Array(len).fill(0);
  for (let i = 0; i < len; i++) getPower(primes[i], i, power, n);
  return power;
}

console.log(factorization(36));
