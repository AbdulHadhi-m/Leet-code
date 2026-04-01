var maxRotateFunction = function(nums) {
    let n = nums.length;
    let sum = 0;
    let f0 = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f0 += i * nums[i];
    }

    let max = f0;
    let curr = f0;

    for (let k = 1; k < n; k++) {
        curr = curr + sum - n * nums[n - k];
        max = Math.max(max, curr);
    }

    return max;
};