function solve(text) {
  let words = text.split(" ");
  let wordsWithHashtag = [];

  for (const word of words) {
    if (word.startsWith("#") && word.length > 1) {
      wordsWithHashtag.push(word.slice(1));
    }
  }

  for (const word of wordsWithHashtag) {
    console.log(word);
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
