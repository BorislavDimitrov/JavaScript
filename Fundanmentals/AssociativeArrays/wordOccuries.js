function solve(words) {
  let occuries = new Map();

  for (const word of words) {
    if (!occuries.has(word)) {
      occuries.set(word, 0);
    }
    let occuriesCount = occuries.get(word);
    occuries.set(word, occuriesCount++);
  }
}
