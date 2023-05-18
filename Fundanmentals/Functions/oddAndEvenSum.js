function solve(num) {
  let resultArr = sumOddAndEven(num);
  let oddSum = resultArr[0];
  let evenSum = resultArr[1];

  console.log(`Odd sum = ${oddSum} Even sum = ${evenSum}`);

  function sumOddAndEven(num) {
    let numAsString = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
      let currentDigit = Number(numAsString[i]);

      if (currentDigit % 2 != 0) {
        oddSum += currentDigit;
      } else {
        evenSum += currentDigit;
      }
    }

    return [oddSum, evenSum];
  }
}

solve(3495892137259234);
