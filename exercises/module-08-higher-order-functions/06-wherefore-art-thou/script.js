function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) =>
    sourceKeys.every((key) => Object.hasOwn(obj, key) && obj[key] === source[key])
  );
}
