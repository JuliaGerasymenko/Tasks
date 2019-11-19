'use strict';

function template(str, arr = []) {
  let index = str.indexOf('*');
  if (index === -1) {
    arr.push(str);
    return;
  }
  let newStr = str.substring(0, index) + '0' + str.substring(index+1);
  template(newStr, arr);
  newStr = str.substring(0, index) + '1' + str.substring(index+1);
  template(newStr, arr);
  return arr;
}

console.log(template('0*1*'));
