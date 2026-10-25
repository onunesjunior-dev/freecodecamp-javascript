function uniteUnique(...arrays) {
  return [...new Set(arrays.flat())];
}
