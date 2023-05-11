function calculateNeededHoursPetDayToReadBook(
  bookPages,
  readablePagesPerHouse,
  days
) {
  let bookPagesNumber = Number(bookPages);
  let readablePagesPerHousNumber = Number(readablePagesPerHouse);
  let daysNumber = Number(days);

  let hoursNeededToReadBook = bookPagesNumber / readablePagesPerHousNumber;
  let hoursPerDayToRead = hoursNeededToReadBook / daysNumber;

  console.log(hoursPerDayToRead);
}

calculateNeededHoursPetDayToReadBook("212", "20", "2");
