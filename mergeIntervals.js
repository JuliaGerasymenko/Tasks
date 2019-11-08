'use strict';

const merge = intervals => {
  let len = intervals.length;
  if (len <= 1) return intervals;
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][0] > intervals[j][0]) {
        [intervals[i], intervals[j]] = [intervals[j], intervals[i]];
      }
    }
  }

  for (let i = 0; i < len - 1; i++) {
    if (
      intervals[i][1] >= intervals[i + 1][0] ||
      (res.length && res[res.length - 1][1] >= intervals[i + 1][0])
    ) {
      if (!res.length) {
        res.push([
          intervals[i][0],
          Math.max(intervals[i][1], intervals[i + 1][1])
        ]);
      } else {
        res[res.length - 1][1] = Math.max(
          res[res.length - 1][1],
          intervals[i + 1][1]
        );
      }
    } else {
      if (!res.length) res.push(intervals[i]);
      res.push(intervals[i + 1]);
    }
  }
  return res;
};
