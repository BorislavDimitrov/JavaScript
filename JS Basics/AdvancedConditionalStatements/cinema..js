function calculateIncome(projectionKind, rows, colums) {
  let rowsNumber = Number(rows);
  let columsNumber = Number(colums);
  const premierePrice = 12.0;
  const normalPrice = 7.5;
  const discountPrice = 5;

  let income = 0;

  if (projectionKind == "Premiere") {
    income = rowsNumber * columsNumber * premierePrice;
  } else if (projectionKind == "Normal") {
    income = rowsNumber * columsNumber * normalPrice;
  } else if (projectionKind == "Discount") {
    income = rowsNumber * columsNumber * discountPrice;
  }

  console.log(`${income.toFixed(2)} leva`);
}

calculateIncome("Discount", "12", "30");
