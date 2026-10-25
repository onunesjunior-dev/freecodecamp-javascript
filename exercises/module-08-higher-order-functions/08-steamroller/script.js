function steamrollArray(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val),
    []
  );
}
