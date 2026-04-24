var sortedArrayToBST = function(nums) {
  function build(left, right) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = build(left, mid - 1);
    root.right = build(mid + 1, right);

    return root;
  }

  return build(0, nums.length - 1);
};