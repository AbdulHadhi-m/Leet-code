var dayOfYear = function(date) {
  const [year, month, day] = date.split("-").map(Number);
  
  const days = [31,28,31,30,31,30,31,31,30,31,30,31];
  
  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
  if (isLeap) days[1] = 29;
  
  let ans = day;
  
  for (let i = 0; i < month - 1; i++) {
    ans += days[i];
  }
  
  return ans;
};