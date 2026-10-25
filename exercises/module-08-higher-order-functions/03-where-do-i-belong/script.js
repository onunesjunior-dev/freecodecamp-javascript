function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex((item) => item >= num);
  return index === -1 ? arr.length : index;
}
