function rightPlace(partWord, char, fullWord) {
  let result = partWord.replace(`_`, char);

  if (result === fullWord) {
    console.log("Matched");
  } else {
    console.log("Not matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
