var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let total = m + n;
    let half = Math.floor((total + 1) / 2);

    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2);
        let j = half - i;

        let left1 = (i === 0) ? -Infinity : nums1[i - 1];
        let right1 = (i === m) ? Infinity : nums1[i];

        let left2 = (j === 0) ? -Infinity : nums2[j - 1];
        let right2 = (j === n) ? Infinity : nums2[j];

        if (left1 <= right2 && left2 <= right1) {
            if (total % 2 === 1) {
                return Math.max(left1, left2);
            }
            return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
        } else if (left1 > right2) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};