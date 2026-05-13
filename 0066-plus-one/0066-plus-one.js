function plusOne(digits) {
    // Start from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // If digit is less than 9, just add 1
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        // If digit is 9, make it 0
        digits[i] = 0;
    }

    // If all digits were 9
    digits.unshift(1);

    return digits;
}