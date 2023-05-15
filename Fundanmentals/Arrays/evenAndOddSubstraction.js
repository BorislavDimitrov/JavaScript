function evenAndOddSubstraction(array) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = Number(array[i]);

    if (currentNum % 2 === 0) {
      evenSum += currentNum;
    } else {
      oddSum += currentNum;
    }
  }

  console.log(evenSum - oddSum);
}

evenAndOddSubstraction([3, 5, 7, 9]);
