var uniquePaths = function(m, n) {
    let N = m + n - 2;
    let r = Math.min(m - 1, n - 1);
    let result = 1;

    for (let i = 1; i <= r; i++) {
        result = result * (N - r + i) / i;
    }

    return Math.round(result);
};