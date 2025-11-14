function hoppingChaos(n) {
  if (n === 1 || n === 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const temp = prev1 + prev2;
    prev2 = prev1;
    prev1 = temp;
  }

  prev1;
}