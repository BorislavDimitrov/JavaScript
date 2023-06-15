function solve(words, text) {
  words = words.split(", ");

  for (let word of words) {
    let pattern = "*".repeat(word.length);
    text = text.replace("*".repeat(word.length), word);
  }

  console.log(text);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
