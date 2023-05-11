function calcualteNeededMoneyToBuyFruits(
  strawberriesPricePerKg,
  bananasKg,
  orangesKg,
  raspberriesKg,
  strawberriesKg
) {
  let strawberriesPricePerKgNumber = Number(strawberriesPricePerKg);
  let bananasKgNumber = Number(bananasKg);
  let orangesKgNumber = Number(orangesKg);
  let raspberriesKgNumber = Number(raspberriesKg);
  let strawberriesKgNumber = Number(strawberriesKg);

  let raspberriesPricePerKg = strawberriesPricePerKgNumber / 2;
  let orangesPricePerKg = raspberriesPricePerKg - raspberriesPricePerKg * 0.4;
  let bananasPricePerKg = raspberriesPricePerKg - raspberriesPricePerKg * 0.8;

  let strawberriesSum = strawberriesKgNumber * strawberriesPricePerKgNumber;
  let bananasSum = bananasKgNumber * bananasPricePerKg;
  let orangesSum = orangesKgNumber * orangesPricePerKg;
  let raspberriesSum = raspberriesKgNumber * raspberriesPricePerKg;

  let totalSum = strawberriesSum + bananasSum + orangesSum + raspberriesSum;
  console.log(totalSum);
}

calcualteNeededMoneyToBuyFruits("48", "10", "3.3", "6.5", "1.7");
