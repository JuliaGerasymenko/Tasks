'use strict';

var recursion = function(root, min, max) {
    if (!root) return true;
    return root.val < max && root.val > min
        ? recursion(root.left, min, root.val) && recursion(root.right, root.val, max)
        : false;
};

var isValidBST = function(root) {
    if (!root || (!root.left && !root.right)) return true;
    return recursion(root.left, -Infinity, root.val) && recursion(root.right, root.val, Infinity);
};
