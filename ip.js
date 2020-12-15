'use strict';

const parseToDecimal = (diff, index) => diff ? diff * Math.pow(256, index) : diff;

function ip(first, sec) {
  let addr1 = first.split('.').reverse(),
    addr2 = sec.split('.').reverse();
  let ans = 0;
  for (let index in addr2)
     ans += parseToDecimal(parseInt(addr2[index]) - parseInt(addr1[index]), index);
  return ans;
}

console.log(ip('10.0.0.0', '10.0.0.20'));
