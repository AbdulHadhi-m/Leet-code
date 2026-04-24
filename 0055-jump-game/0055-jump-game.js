var canJump = function(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // can't reach this index

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) return true; // reached end
  }

  return true;
};