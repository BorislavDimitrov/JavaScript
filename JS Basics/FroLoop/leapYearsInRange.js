function printLeapYearsInCertainRange(startYear, endYear) {
  let startYearNumber = Number(startYear);
  let endYearNumber = Number(endYear);

  for (let index = startYearNumber; index <= endYearNumber; index++) {
    if (index % 4 == 0) {
      console.log(index);
    }
  }
}

printLeapYearsInCertainRange("2020", "2032");
