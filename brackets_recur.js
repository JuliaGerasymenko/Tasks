'use strict';

function isEntired(str, index, pair, dict) {

  if (str[index] !== dict[pair]) index = isEntired(str, index+1, str[index], dict);

  return str[index] === dict[pair]
    ? index : isEntired(str, index+1, pair, dict);
 }

const brackets = (str, index, pair) =>
  isEntired(str, index, pair, {'(' : ')','{' : '}','[' : ']'})

console.log(brackets('({()()})', 0, '('));
