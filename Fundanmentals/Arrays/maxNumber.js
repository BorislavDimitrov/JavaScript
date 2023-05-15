function maxNumber(array) {
  let topNubmers = [];

  for (let i = 0; i < array.length; i++) {
    let isMaxNumber = true;
    let currentNumber = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (currentNumber <= array[j]) {
        isMaxNumber = false;
      }
    }

    if (isMaxNumber) {
      topNubmers.push(currentNumber);
    }
  }

  console.log(topNubmers);
}

maxNumber([14, 24, 3, 19, 15, 17]);
