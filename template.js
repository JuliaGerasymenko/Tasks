'use strict';

class StringBuffer {
  constructor() {
    this.buffer = [];
    this.index = 0;
  }
  add(str) {
    this.buffer[this.index] = str;
    this.index++;
  }
}

function template(str, arr = new StringBuffer(), start = 0) {
  let index = str.indexOf('*', start);
  if (index === -1) {
    arr.add(str);
    return;
  }
  let newStr = str.substring(0, index) + '0' + str.substring(index+1);
  template(newStr, arr, index+1);
  newStr = str.substring(0, index) + '1' + str.substring(index+1);
  template(newStr, arr, index+1);
  return arr.buffer;
}

console.log(template('0*1*'));
