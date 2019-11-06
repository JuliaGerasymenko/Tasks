'use strict';

let base = 1000000;

function addition(arr1, arr2) {
  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }
  if (arr2[0] === 0 && arr2.length === 1) return arr1;
  let len1 = arr1.length;
  let len2 = arr2.length;

  for (let i = 0; i < len2; i++) {
    arr1[i] += arr2[i];
    if (arr1[i] >= base) {
      arr1[i] -= base;
      i === len1 - 1 ? arr1.push(1) : (arr1[i + 1] += 1);
    }
  }
  return arr1;
}

function multiplication(arr1, arr2) {
  if (!arr1[0] && arr1.length === 1) return arr1;
  let len1 = arr1.length;
  let len2 = arr2.length;

  if (len1 !== len2) {
    if (len1 < len2) {
      while (arr2.length !== len1) {
        arr1.push(0);
      }
    } else {
      while (arr2.length !== len1) {
        arr2.push(0);
      }
    }
  }

  let res = new Array(len2 + len1 - 1).fill(0);
  let resLen = res.length - 1;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len1; j++) {
      res[j + i] += arr2[i] * arr1[j];
      if (res[j + i] > base - 1) {
        let divider = Math.floor(res[j + i] / base);
        res[j + i] %= base;
        res[j + i + 1] === undefined
          ? res.push(divider)
          : (res[j + i + 1] += divider);
      }
    }
  }

  while (!res[res.length - 1]) {
    res.pop();
  }
  return res;
}

function fibonacci(t1, t2, n) {
  let a1 = [t1];
  let a2 = [t2];
  let count = 3;

  for (let i = 3; i <= n; i++) {
    a1 = addition(a1, multiplication(a2,a2));
    if (i !== n) {
      let tmp = a1;
      a1 = a2;
      a2 = tmp;
    }
  }

  return (a1.length > 1
    ? a1.map((el, i) => {
        el = el.toString();
        while (el.length < 6 && i !== a1.length - 1) {
          el = "0" + el;
        }
        return el;
      })
    : a1
  )
    .reverse()
    .join('');
}

console.log(fibonacci(0,1,10));

// the second more slowly variant

// function fibonacci(t1, t2, n) {
//   let a1 = [t1];
//   let a2 = [t2];
//   let count = 3;
  // let k;
  // function sum(a1, a2, count) {
  //   if (count > n) return k;
  //   k = addition(a1, multiplication(a2, a2));
  //   return sum(a2, k, ++count);
  // }
  // let sum1 = sum(a1, a2, 3);
  // return (sum1.length > 1
    //   ? sum1.map((el, i) => {
      //       el = el.toString();
      //       while (el.length < 6 && i !== sum1.length - 1) {
        //         el = '0' + el;
        //       }
        //       return el;
        //     })
        //   : sum1
        // )
        //   .reverse()
        //   .join('');
// }
