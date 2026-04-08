var evaluate = function(s, knowledge) {
  const map = new Map(knowledge);
  let res = "";
  let key = "";
  let inside = false;

  for (let ch of s) {
    if (ch === "(") {
      inside = true;
      key = "";
    } else if (ch === ")") {
      res += map.get(key) || "?";
      inside = false;
    } else {
      if (inside) key += ch;
      else res += ch;
    }
  }

  return res;
};