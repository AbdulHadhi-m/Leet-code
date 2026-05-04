var intersect = function(nums1, nums2) {
  let map = {};
  let result = [];

  // count nums1
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  // check nums2
  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
};