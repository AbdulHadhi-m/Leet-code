var convertTime = function(current, correct) {
  const toMin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  let diff = toMin(correct) - toMin(current);
  let count = 0;
  const ops = [60, 15, 5, 1];

  for (let op of ops) {
    count += Math.floor(diff / op);
    diff %= op;
  }

  return count;
};