'use strict';

function row(board) {
  for (let arr of board)
    if (arr.every(el => (arr[0] && el === arr[0]))) {
      return arr[0];
    }
  return false;
}

function col(board) {
  for (let i in board) {
    let win = true;
    for (let j in board) {
      if (board[0][i] && board[j][i] !== board[0][i]) {
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
    lDiag[i - 1] = board[i][i] === board[0][0];
    rDiag[i - 1] = board[i][2 - i] === board[0][2];
  }
  if (lDiag.every(el => el)) return board[0][0];
  if (rDiag.every(el => el)) return board[0][2];
  return false;
}

function toe(board) {
  let ans = col(board) || diag(board) || row(board);
  return ans ? ans : board.every(arr => arr.every(el => el)) ? 0 : -1;
}

let buf = [];
process.stdin.on('data', input => buf.push(input));

process.stdin.on('end', function() {
  buf = buf.join('').split('\n').filter(el => el.length).map(el => el.toString().trim().split(' ').map(el => parseInt(el)));
  for (let i = 1; i <= buf[0]*3; i += 3) console.log(toe(new Array(...buf.slice(i, i+3))));
});
