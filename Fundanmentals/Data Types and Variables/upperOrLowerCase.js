function upperOrLowerCase(letter) {
  let upperCase = letter.toUpperCase();

  if (letter === upperCase) {
    console.log(`upper-case`);
  } else {
    console.log(`lower-case`);
  }
}

upperOrLowerCase("f");
