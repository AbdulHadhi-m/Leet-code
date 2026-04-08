var mapWordWeights = function(words, weights) {
  let res = "";

  for (const word of words) {
    let sum = 0;

    for (const ch of word) {
      sum += weights[ch.charCodeAt(0) - 97];
    }

    res += String.fromCharCode(122 - (sum % 26));
  }

  return res;
};