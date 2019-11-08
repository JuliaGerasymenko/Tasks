'use strict';

let base = 1000000;
let baseLog = Math.log10(base);

function addition(arr1, arr2) {
  if (arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1];
  if (arr2[0] === 0 && arr2.length === 1) return arr1;

  let len1 = arr1.length;
  let len2 = arr2.length;
  let res = new Array(len1).fill(0);

  for (let i = 0; i < len1; i++) {
    res[i] += arr1[i] + (arr2[i] === undefined ? 0 : arr2[i]);
    if (res[i] >= base) {
      res[i] -= base;
      i === len1 - 1 ? res.push(1) : (res[i + 1] += 1);
    }
  }
  return res;
}

function multiplication(arr1, arr2) {
  if (!arr1[0] && arr1.length === 1) return arr1;

  let len1 = arr1.length;
  let len2 = arr2.length;
  let res = new Array(len1 + len2 - 1).fill(0);
  let resLen = res.length - 1;

  for (let i = 0; i < len2; i++) {
    for (let j = 0; j < len1; j++) {
      res[j + i] += arr2[i] * arr1[j];
      if (res[j + i] >= base) {
        let divider = Math.floor(res[j + i] / base);
        res[j + i] %= base;
        res[j + i + 1] === undefined
          ? res.push(divider)
          : (res[j + i + 1] += divider);
      }
    }
  }

  return res;
}

function fibonacci(t1, t2, n) {
  let a1 = [t1];
  let a2 = [t2];

  for (let i = 3; i <= n; i++) {
    a1 = addition(a1, multiplication(a2,a2));
    if (i !== n) [a1, a2] = [a2, a1];
  }

  return (a1.length > 1
    ? a1.map((el, i) => {
        el = el.toString();
        if (i === a1.length - 1) return el;
        while (el.length <= baseLog) el = '0' + el;
        return el;
      })
    : a1
  )
    .reverse()
    .join('');
}

console.log(fibonacci(0,1,10));
