function isBalanced(s) {
  let stack = [];
  let pair = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  for(let char of s) {
    if (['{', '(', '['].includes(char)) {
      stack.push(char);
    } else {
      let openBracket = stack.pop();
      if (char !== pair[openBracket]) return 'NO';
    }
  }
  return stack.length ? 'NO' : 'YES';
}
