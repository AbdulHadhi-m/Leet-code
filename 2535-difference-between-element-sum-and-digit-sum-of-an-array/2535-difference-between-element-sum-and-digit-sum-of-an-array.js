var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let num of nums) {
        elementSum += num;

        let n = num;
        while (n > 0) {
            digitSum += n % 10;
            n = Math.floor(n / 10);
        }
    }

    return Math.abs(elementSum - digitSum);
};