var summaryRanges = function(nums) {
  let result = [];
  let start = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      let end = i - 1;

      if (nums[start] === nums[end]) {
        result.push(nums[start].toString());
      } else {
        result.push(nums[start] + "->" + nums[end]);
      }

      start = i;
    }
  }

  return result;
};