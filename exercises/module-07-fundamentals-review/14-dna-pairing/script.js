function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return [...str].map(char => [char, pairs[char]]);
}
