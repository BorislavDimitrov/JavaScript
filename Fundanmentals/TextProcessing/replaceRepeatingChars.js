function solve(text) {
  for (const char of text) {
    for (let i = 1; i < text.length; i++) {
      text = text.replace(char.repeat(i), char);
    }
  }

  console.log(text);
}

solve("qqqwerqwecccwd");
