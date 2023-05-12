function calculateMoney(age, washingMachinePrice, toyPrice) {
  let ageNumber = Number(age);
  let washingMachinePriceNumber = Number(washingMachinePrice);
  let toyPriceNumber = Number(toyPrice);

  let givenMoney = 0;
  let toysCount = 0;
  let sum = 0;

  for (let index = 1; index <= ageNumber; index++) {
    if (index % 2 != 0) {
      toysCount++;
    } else {
      givenMoney += 10;
      sum += givenMoney - 1;
    }
  }

  let soldToysSum = toysCount * toyPriceNumber;

  sum += soldToysSum;

  if (sum >= washingMachinePriceNumber) {
    console.log(`Yes! ${(sum - washingMachinePriceNumber).toFixed(2)}`);
  } else {
    console.log(`No! ${washingMachinePriceNumber - sum}`);
  }
}

calculateMoney("21", "1570.98", "3");
