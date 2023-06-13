function solve(arr) {
  let searchedWords = arr.shift().split(" ");

  let words = {};

  for (const word of searchedWords) {
    words[word] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element == "this" || element == "sentence") {
      words[element]++;
    }
  }

  let entries = Object.entries(words);

  for (const [key, value] of entries) {
    console.log(`${key} - ${value}`);
  }
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
