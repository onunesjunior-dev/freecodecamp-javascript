function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  return range.reduce((acc, curr) => lcm(acc, curr), 1);
}
