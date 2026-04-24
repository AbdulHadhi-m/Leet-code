var evalRPN = function(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      let b = stack.pop();
      let a = stack.pop();

      let result;
      if (token === "+") result = a + b;
      if (token === "-") result = a - b;
      if (token === "*") result = a * b;
      if (token === "/") result = Math.trunc(a / b); // truncate toward 0

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};