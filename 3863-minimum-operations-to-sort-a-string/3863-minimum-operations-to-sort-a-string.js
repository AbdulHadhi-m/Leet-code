var minOperations = function(s) {
  const n = s.length;

  let sorted = true;
  for (let i = 1; i < n; i++) {
    if (s[i] < s[i - 1]) {
      sorted = false;
      break;
    }
  }
  if (sorted) return 0;
  if (n === 2) return -1;

  let mn = 'z', mx = 'a';
  for (const ch of s) {
    if (ch < mn) mn = ch;
    if (ch > mx) mx = ch;
  }

  if (s[0] === mn || s[n - 1] === mx) return 1;

  for (let i = 1; i < n - 1; i++) {
    if (s[i] === mn || s[i] === mx) return 2;
  }

  return 3;
};