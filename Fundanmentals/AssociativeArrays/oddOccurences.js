function solve(text) {
  let words = text.split(" ").map((x) => x.toLowerCase());
  let wordsBook = new Map();

  for (const word of words) {
    if (wordsBook.has(word)) {
      let count = wordsBook.get(word);
      wordsBook.set(word, count + 1);
    } else {
      wordsBook.set(word, 1);
    }
  }

  let entries = Array.from(wordsBook.entries());
  let oddEntries = entries.filter((x) => x[1] % 2 != 0);

  for (const [key] of oddEntries) {
    console.log(`${key}`);
  }
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
