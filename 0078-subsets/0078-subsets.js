var subsets = function(nums) {
    const result = [];

    function backtrack(start, current) {
        result.push([...current]); // add current subset

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);        // choose
            backtrack(i + 1, current);   // explore
            current.pop();               // backtrack
        }
    }

    backtrack(0, []);
    return result;
};