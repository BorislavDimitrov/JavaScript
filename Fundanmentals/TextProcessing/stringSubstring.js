function solve(word, text) {
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseText = text.toLowerCase();

  let isExistring = lowerCaseText.includes(lowerCaseWord);

  if (isExistring) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

solve("javascript", "JavaScript is the best programming language");
