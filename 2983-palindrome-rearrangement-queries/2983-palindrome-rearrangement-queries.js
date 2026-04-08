var canMakePalindromeQueries = function(s, queries) {
  const n = s.length;
  const m = n >> 1;
  const left = s.slice(0, m);
  const right = s.slice(m).split("").reverse().join("");

  const prefL = Array.from({ length: m + 1 }, () => Array(26).fill(0));
  const prefR = Array.from({ length: m + 1 }, () => Array(26).fill(0));
  const bad = Array(m + 1).fill(0);

  for (let i = 0; i < m; i++) {
    for (let c = 0; c < 26; c++) {
      prefL[i + 1][c] = prefL[i][c];
      prefR[i + 1][c] = prefR[i][c];
    }
    prefL[i + 1][left.charCodeAt(i) - 97]++;
    prefR[i + 1][right.charCodeAt(i) - 97]++;
    bad[i + 1] = bad[i] + (left[i] !== right[i] ? 1 : 0);
  }

  const getCnt = (pref, l, r) => {
    const res = Array(26).fill(0);
    if (l > r) return res;
    for (let c = 0; c < 26; c++) {
      res[c] = pref[r + 1][c] - pref[l][c];
    }
    return res;
  };

  const sub = (a, b) => {
    const res = Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
      res[i] = a[i] - b[i];
      if (res[i] < 0) return null;
    }
    return res;
  };

  const same = (a, b) => {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const badIn = (l, r) => (l > r ? 0 : bad[r + 1] - bad[l]);

  const ans = [];

  for (let [a, b, c, d] of queries) {
    const l = n - 1 - d;
    const r = n - 1 - c;

    const interL = Math.max(a, l);
    const interR = Math.min(b, r);

    const unionBad = badIn(a, b) + badIn(l, r) - badIn(interL, interR);
    if (unionBad !== bad[m]) {
      ans.push(false);
      continue;
    }

    const cntA = getCnt(prefL, a, b);
    const cntB = getCnt(prefR, l, r);
    const cntInterL = getCnt(prefL, interL, interR);
    const cntInterR = getCnt(prefR, interL, interR);

    const needFromA = sub(getCnt(prefR, a, b), cntInterR);
    const needFromB = sub(getCnt(prefL, l, r), cntInterL);

    if (needFromA === null || needFromB === null) {
      ans.push(false);
      continue;
    }

    const remA = sub(cntA, needFromA);
    const remB = sub(cntB, needFromB);

    ans.push(remA !== null && remB !== null && same(remA, remB));
  }

  return ans;
};