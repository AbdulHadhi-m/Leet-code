var reverseOnlyLetters = function(s) {
    let arr = s.split('');
    let l = 0, r = arr.length - 1;

    while (l < r) {
        if (!/[a-zA-Z]/.test(arr[l])) {
            l++;
        } else if (!/[a-zA-Z]/.test(arr[r])) {
            r--;
        } else {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }

    return arr.join('');
};