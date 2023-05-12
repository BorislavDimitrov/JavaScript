function biggestNumber(input) {
  let biggestNumber = Number.MIN_VALUE;
  let num = Number(input[0]);
  let index = 0;
  while (num != "Stop") {
    if (biggestNumber < Number(num)) {
      biggestNumber = Number(num);
    }

    index++;
    num = input[index];
  }

  console.log(biggestNumber);
}

biggestNumber(["12", "100", "122", "32424", "Stop", "3"]);
