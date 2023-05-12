function sumOfVowelLetters(text) {
  const letterAPoints = 1;
  const letterEPoints = 2;
  const letterIPoints = 3;
  const letterOPoints = 4;
  const letterUPoints = 5;

  let sum = 0;

  for (let index = 0; index < text.length; index++) {
    let currentChar = text[index].toLowerCase();

    if (currentChar === "a") {
      sum += letterAPoints;
    } else if (currentChar === "e") {
      sum += letterEPoints;
    } else if (currentChar === "i") {
      sum += letterIPoints;
    } else if (currentChar === "o") {
      sum += letterOPoints;
    } else if (currentChar === "u") {
      sum += letterUPoints;
    }
  }

  console.log(sum);
}

sumOfVowelLetters("hello");
