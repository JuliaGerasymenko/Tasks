'use strict';

function coins(diff, arr, varients, conseq = []) {
  if (diff < 0) return;
  if (!diff) {
    if (conseq.every((el,i) => !i || conseq[i-1] <= el))
      varients.push(conseq.join('+'));
  }

  for (let i = 0; i < arr.length; i++) {
    conseq.push(arr[i]);
    coins(diff-arr[i], arr, varients, conseq);
    conseq.pop();
  }
}

function coinsVariants(diff, arr) {
  let varients = [];
  coins(diff, arr, varients);
  return varients;
}

console.log(coinsVariants(4, [1,2]));
