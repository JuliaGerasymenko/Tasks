'use strict';

function coinsSum(sum, nominals, arr) {
  for (let i = 0; i < nominals.length; i++) {
    for (let j = 1; j <= sum; j++) {
        let index = j - nominals[i];
        if (index >= 0) arr[j] += arr[index];
    }
  }
  return arr[sum];
}

function coins(sum, nominals) {
  let arr = new Array(sum + 1).fill(0);
  arr[0] = 1;
  return coinsSum(sum, nominals, arr);
}

console.log(coins(1000,[10,12,15]));
