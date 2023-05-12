function searchBook(input) {
  let favouriteBook = input[0];
  let booksChecked = 0;
  let index = 1;
  let book = input[1];
  let isFound = false;
  while (book != "No More Books") {
    booksChecked++;

    if (favouriteBook == input[index]) {
      isFound = true;
      break;
    }

    index++;
    book = input[index];
  }

  if (isFound) {
    console.log(`The book is found, you checked ${booksChecked} books.`);
  } else {
    console.log(`The book is not here.`);
    console.log(`You checked ${booksChecked} books.`);
  }
}

searchBook(["Troy", "Stronger", "Life Style", "Troy"]);
