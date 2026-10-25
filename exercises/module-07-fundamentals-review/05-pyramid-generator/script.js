function pyramid(char, count, inverted) {
  const rows = [];
  for (let i = 1; i <= count; i++) {
    const spaces = " ".repeat(count - i);
    const pattern = char.repeat(2 * i - 1);
    const row = spaces + pattern;
    if (inverted) {
      rows.unshift(row);
    } else {
      rows.push(row);
    }
  }
  return "\n" + rows.join("\n") + "\n";
}
