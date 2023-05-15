function reverseArrayOfStrings(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }

  console.log(array);
}

reverseArrayOfStrings(["abc", "def", "hig", "klm", "nop"]);
