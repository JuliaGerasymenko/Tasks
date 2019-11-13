'use strict';

function merge(arr, start, m, end) {
  let newArr = [];
  let i = start,
    j = m + 1;

  while(i <= m && j <= end) {
    if (arr[i][0] < arr[j][0]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr[j]);
      j++;
    }
  }

  while (i <= m) {
    newArr.push(arr[i]);
    i++;
  }

  while(j <= end) {
    newArr.push(arr[j]);
    j++;
  }
  for (let i = start; i <= end ; i++) arr[i] = newArr[i-start];
}

function mergeSort(arr, i, j) {
  if (i < j) {
    let m = Math.floor((i+j)/2);
    mergeSort(arr, i, m);
    mergeSort(arr, m+1, j);
    merge(arr, i, m, j);
  }
}

function concat(intervals) {
  let len = intervals.length;
  if (len <= 1) return intervals;

  mergeSort(intervals, 0, len-1);

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][0] > intervals[j][0])
        [intervals[i], intervals[j]] = [intervals[j], intervals[i]];
    }
  }

  let res = [intervals.shift()];
  for (let interval of intervals) {
    let lastIndex = res.length - 1;
    interval[0] <= res[lastIndex][1]
      ? res[lastIndex][1] = Math.max(res[lastIndex][1], interval[1])
      : res.push(interval);
  }

  return res;
};
console.log(concat([[1,3],[2,6],[8,10],[15,18]]));
