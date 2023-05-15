function reverseNumbers(num, array) {
  let reversedArray = [];

  for (let i = 0; i < num; i++) {
    reversedArray.push(array[i]);
  }

  let reversedNumbers = "";

  for (let i = reversedArray.length - 1; i >= 0; i--) {
    reversedNumbers += array[i] + " ";
  }
  console.log(reversedNumbers);
}

reverseNumbers(2, [66, 43, 75, 89, 47]);
