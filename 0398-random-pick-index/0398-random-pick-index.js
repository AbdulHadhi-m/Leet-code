var Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {
    let count = 0;
    let result = -1;

    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++;

            // pick current index with probability 1/count
            if (Math.floor(Math.random() * count) === 0) {
                result = i;
            }
        }
    }

    return result;
};