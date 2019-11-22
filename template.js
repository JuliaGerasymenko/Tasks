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
  createStr(str) {
    for (;this.index < str.length; this.index++)
      this.buffer[this.index] = str[this.index];
  }
  changeEl(index, el) {
    this.buffer[index] = el;
  }
}

function template(bufferStr, arr = new StringBuffer(), start = 0) {
  let index = bufferStr.buffer.indexOf('*', start);
  if (index === -1) {
    arr.add(bufferStr.buffer.join(''));
    return arr.buffer;
  }

  bufferStr.changeEl(index, '0');
  template(bufferStr, arr, index + 1);
  bufferStr.changeEl(index, '1');
  template(bufferStr, arr, index + 1);
  bufferStr.changeEl(index, '*');
  return arr.buffer;
}

function findStr(str) {
  let bufferStr = new StringBuffer();
  bufferStr.createStr(str);
  return template(bufferStr);
}
console.log(findStr('123'));
