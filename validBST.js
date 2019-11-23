'use strict';

var isValidBST = function(root, lowerBound = -Infinity, higherBound = Infinity) {

  if (!root) return true;

    if (root.val >= higherBound || root.val <= lowerBound) return false;

   return (!isValidBST(root.left, lowerBound, root.val) || !isValidBST(root.right, root.val, higherBound))
       ? false : true;
};
