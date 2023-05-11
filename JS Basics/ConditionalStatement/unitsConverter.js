function convertUnits(number, inputType, outputType) {
  let num = parseInt(number);
  let result = 0.0;
  if (inputType === "m") {
    if (outputType === "cm") {
      result = num * 100;
    } else if (outputType === "mm") {
      result = num * 1000;
    }
  } else if (inputType === "cm") {
    if (outputType === "m") {
      result = num / 100;
    } else if (outputType === "mm") {
      result = num * 10;
    }
  } else if (inputType === "mm") {
    if (outputType === "m") {
      result = num / 1000;
    } else if (outputType === "mm") {
      result = num / 10;
    }
  }

  console.log(result.toFixed(3));
}

convertUnits("45", "cm", "mm");
