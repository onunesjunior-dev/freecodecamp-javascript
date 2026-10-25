function dropElements(arr, func) {
  const index = arr.findIndex(func);
  return index === -1 ? [] : arr.slice(index);
}
