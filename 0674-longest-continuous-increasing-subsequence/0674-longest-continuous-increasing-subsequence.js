function findLengthOfLCIS(nums) {
    let maxLen = 1;
    let currentLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLen++;
        } else {
            currentLen = 1;
        }

        maxLen = Math.max(maxLen, currentLen);
    }

    return maxLen;
}