function solve(text) {
  let regex = /[A-z0-9_]+/g;

  let words = text.match(regex);

  let wordsBook = {};

  for (const word of words) {
    if (!wordsBook.hasOwnProperty(word)) {
      wordsBook[word] = 0;
    }

    wordsBook[word] += 1;
  }

  let wordsJSON = JSON.stringify(wordsBook);

  console.log(words);

  console.log(wordsJSON);
}

solve("JS devs use Node.js for server-side JS.-- JS for devs");
