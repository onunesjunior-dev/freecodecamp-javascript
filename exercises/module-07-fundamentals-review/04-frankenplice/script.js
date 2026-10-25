function frankenSplice(arr1, arr2, n) {
  const result = arr2.slice();
  result.splice(n, 0, ...arr1);
  return result;
}
