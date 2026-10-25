function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    if (!results.includes(prefix)) {
      results.push(prefix);
    }
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    const remainder = str.slice(0, i) + str.slice(i + 1);
    permuteString(remainder, prefix + str[i], results);
  }

  return results;
}

console.log(permuteString("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(permuteString("aa"));  // ["aa"] (Duplicatas eliminadas pelo includes)
