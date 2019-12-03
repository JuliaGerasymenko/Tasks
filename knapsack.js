'use strict';

function backpack(values, weights, itemsCount, capacity) {
  let table = new Array(itemsCount);
  for (let i = 0; i < itemsCount; i++) {
   table[i] = new Array(capacity+1);
  }
  for (let i = 0; i < itemsCount; i++) {
    for (let j = 0; j <= capacity; j++) {
      table[i][j] = i ? Math.max(table[i-1][j], (j-weights[i]) < 0 ?  0 : values[i] + table[i-1][j-weights[i]]) : (j < weights[i]) ? 0 : values[i]
    }
  }
  return table[itemsCount-1][capacity];
}

console.log(backpack([7, 8, 14], [2,1,5], 3, 11));
