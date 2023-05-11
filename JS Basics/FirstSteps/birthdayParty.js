function calculateSumNeededForParty(rentPrice) {
  let rentPriceNumber = Number(rentPrice);
  let cakePrice = rentPriceNumber * 0.2;
  let drinksPrice = cakePrice - cakePrice * 0.45;
  let animatorPrice = rentPriceNumber / 3;
  let finalSum = rentPriceNumber + cakePrice + drinksPrice + animatorPrice;

  console.log(finalSum);
}

calculateSumNeededForParty("3720");
