function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  return ((min + max) * (max - min + 1)) / 2;
}
