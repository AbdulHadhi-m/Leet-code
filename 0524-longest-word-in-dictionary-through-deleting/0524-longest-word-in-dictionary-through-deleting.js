var findLongestWord = function(s, dictionary) {
    const isSubsequence = (word) => {
        let i = 0, j = 0;
        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) j++;
            i++;
        }
        return j === word.length;
    };

    let ans = "";

    for (let word of dictionary) {
        if (
            isSubsequence(word) &&
            (word.length > ans.length ||
            (word.length === ans.length && word < ans))
        ) {
            ans = word;
        }
    }

    return ans;
};