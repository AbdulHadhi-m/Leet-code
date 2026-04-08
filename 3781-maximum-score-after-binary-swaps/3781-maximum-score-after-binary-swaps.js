var maximumScore = function(nums, s) {
  const heap = [];
  let ans = 0;

  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };

  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let largest = i;

        if (l < heap.length && heap[l] > heap[largest]) largest = l;
        if (r < heap.length && heap[r] > heap[largest]) largest = r;

        if (largest === i) break;
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        i = largest;
      }
    }
    return top;
  };

  for (let i = 0; i < nums.length; i++) {
    push(nums[i]);
    if (s[i] === '1') ans += pop();
  }

  return ans;
};