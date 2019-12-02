'use strict';

function row(board) {
  let el = false;
  board.forEach(arr => {
    if (arr.every(el => el === arr[0])) {
      el = arr[0];
      return true;
    }
  });
  return el;
}

function col(board) {
  for (let i in board) {
    let win = true;
    for (let j in board) {
      if (board[j][i] !== board[0][i]) {
        win = false;
        break;
      }
    }
    if (win) return board[0][i];
  }
  return false;
}

function diag(board) {
  let lDiag = [false, false];
  let rDiag = [false, false];

  for (let i = 1; i < 3; i++) {
    if (board[i][i] === board[0][0]) lDiag[i - 1] = true;
    if (board[i][2 - i] === board[0][2]) rDiag[i - 1] = true;
  }
  if (lDiag.every(el => el)) return board[0][0];
  if (rDiag.every(el => el)) return board[0][2];
  return false;
}

function toe(board) {
  let ans = col(board) || diag(board) || row(board);
  return ans ? ans : board.every(arr => arr.every(el => el)) ? 0 : -1;
}

let buf;
process.stdin.on('data', input => {
  buf = input.toString().split('\n').filter(el => el.length)
    .map(el => el.trim().split(' ').map(el => parseInt(el)));
    console.log(buf)
});

process.stdin.on('end', function() {
  for (let i = 1; i <= buf[0]; i++) console.log(toe(buf.slice(i, i+3)));
});
