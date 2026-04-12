var differenceOfSums = function(n, m) {
    let total = (n * (n + 1)) / 2;
    let count = Math.floor(n / m);
    let divisibleSum = m * (count * (count + 1)) / 2;

    return total - 2 * divisibleSum;
};
