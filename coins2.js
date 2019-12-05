'use strict';

function helper(sum, nominals, table) {
  for (let i = 1; i <= nominals.length; i++) {
    for (let j = 1; j <= sum; j++) {
        let index = j - nominals[i-1];
        table[i][j] = table[i-1][j];
        if (index >= 0) table[i][j] += table[i][index];
    }
  }
  return table[nominals.length][sum];
}

function coins(sum, nominals) {
  let table = new Array(nominals.length+1);
  for (let i = 0 ; i <= nominals.length; i++) {
    table[i] = new Array(sum+1).fill(0);
    table[i][0] = 1;
  }
  return helper(sum, nominals, table);
}

console.log(coins(4, [1,2]));
