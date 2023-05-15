function addOrSubtract(array) {
  let initialArraySum = 0;

  for (let i = 0; i < array.length; i++) {
    initialArraySum += array[i];
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
  }

  let finalSum = 0;

  for (let i = 0; i < array.length; i++) {
    finalSum += array[i];
  }

  console.log(array);
  console.log(initialArraySum);
  console.log(finalSum);
}

addOrSubtract([-5, 11, 3, 0, 2]);
