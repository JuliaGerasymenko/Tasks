'use strict';

var recursion = function(root, min, max) {
  if (!root) return true;
  return root.val < max
    ? root.val > min
      ? recursion(root.left, min, root.val) &&
        recursion(root.right, root.val, max)
      : false
    : false;
};

var isValidBST = root => recursion(root, -Infinity, Infinity);
