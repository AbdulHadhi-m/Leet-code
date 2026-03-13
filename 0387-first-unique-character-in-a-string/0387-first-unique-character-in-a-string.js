const firstUniqChar = (s) => {
  const map = new Map();

  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const [i, c] of [...s].entries()) {
    if (map.get(c) === 1) return i;
  }

  return -1;
};

