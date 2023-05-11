function depositCalulation(deposit, depositTerm, yearlyInterestRate) {
  let depositSum = Number(deposit);
  let depositTermNumber = Number(depositTerm);
  let yearlyInterestRateNumber = Number(yearlyInterestRate);

  let totalInterest = (depositSum * yearlyInterestRateNumber) / 100;
  let monthlyInterest = totalInterest / 12;
  let finalSum = depositSum + depositTermNumber * monthlyInterest;

  console.log(finalSum);
}

depositCalulation("2350", "6", "7");
