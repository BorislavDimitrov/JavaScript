function convertUsdToLeva(leva) {
  const usdToLevaCourse = 1.79549;
  let levaSum = Number(leva);

  let usd = levaSum * usdToLevaCourse;

  console.log(usd);
}

convertUsdToLeva("100");
