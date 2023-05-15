function equalArrays(array1, array2) {
  let isIndentical = true;
  let sum = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isIndentical = false;
      console.log(
        `The arrays are not indenctical. Found difference at ${i} index`
      );
      break;
    }

    sum += array1[i];
  }

  if (isIndentical) {
    console.log(`The arrays are indentical. Sum: ${sum}`);
  }
}

equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
