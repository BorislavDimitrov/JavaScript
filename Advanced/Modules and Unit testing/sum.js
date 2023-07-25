const sum = (arr, startIndex, endIndex) => {
  if (!Array.isArray(arr)) {
    return NaN;
  }

  var nonNumbericElements = arr.map((x) => x).filter((x) => isNaN(x));

  if (nonNumbericElements.length > 0) {
    return NaN;
  }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  var convertedNumbers = arr.map((x) => Number(x));

  var numbersToSum = convertedNumbers.slice(startIndex, endIndex + 1);

  var sum = numbersToSum.reduce(
    (accomulator, currentValue) => accomulator + currentValue,
    0
  );

  return sum;
};
console.log(sum([], 1, 2));

module.exports = { sum };
