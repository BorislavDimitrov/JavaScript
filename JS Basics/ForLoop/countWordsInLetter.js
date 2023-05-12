function countWords(text) {
  let wordsCount = 1;

  for (let index = 0; index < text.length; index++) {
    if (text[index] == " ") {
      wordsCount++;
    }
  }

  if (wordsCount <= 10) {
    console.log(`The message is sent succesfully!`);
  } else {
    console.log(
      `The message is too long to be send! It has ${wordsCount} words.`
    );
  }
}

countWords("This message has ten words and you can send it!");
