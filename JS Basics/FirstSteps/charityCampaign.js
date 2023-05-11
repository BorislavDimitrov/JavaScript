function calculateCollectedMoneyFromCharityCampaign(
  charityDays,
  confectionersCount,
  cakesCount,
  gaufrettesCount,
  pancakesCount
) {
  const oneCakePrice = 45;
  const oneGaufrettesPrice = 5.8;
  const onePancakePrice = 3.2;

  let charityDaysCount = Number(charityDays);
  let confectionersCountNumber = Number(confectionersCount);
  let cakesCountNumber = Number(cakesCount);
  let gaufrettesCountNumber = Number(gaufrettesCount);
  let pancakesCountNumber = Number(pancakesCount);

  let moneyPerDayFromCakes = oneCakePrice * cakesCountNumber;
  let moneyPerDayFromGaufrettes = gaufrettesCountNumber * oneGaufrettesPrice;
  let moneyPerDayFromPancakes = pancakesCountNumber * onePancakePrice;
  let totalMoneyPerDay =
    (moneyPerDayFromCakes +
      moneyPerDayFromGaufrettes +
      moneyPerDayFromPancakes) *
    confectionersCountNumber;
  let totalMoneyForWholeCampaign = totalMoneyPerDay * charityDaysCount;
  let finalMoneyAfterExpenses =
    totalMoneyForWholeCampaign - totalMoneyForWholeCampaign / 8;

  console.log(finalMoneyAfterExpenses);
}

calculateCollectedMoneyFromCharityCampaign("23", "8", "14", "30", "16");
