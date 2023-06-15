function solve(text) {
  let words = [];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 1; i < text.length; i++) {
    let char = text[i];
    let word = "";

    if (i == text.length - 1) {
      word = text.substring(startIndex, i + 1);
      words.push(word);
    }

    if (char === char.toUpperCase()) {
      endIndex = i;
      word = text.substring(startIndex, endIndex);
      words.push(word);
      startIndex = i;
    }
  }

  console.log(words);
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
