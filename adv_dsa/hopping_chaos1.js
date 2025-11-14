function hoppingChaos(n) {
  const memo = new Map();

  function waysToN(n) {
    if (n === 1 || n === 2) return n;

    if (memo.has(n)) {
      return memo.get(n);
    }
    const result = waysToN(n - 1) + waysToN(n - 2);
    memo.set(n, result);
    return result;
  }

  return waysToN(n);
}


console.log(hoppingChaos(50));