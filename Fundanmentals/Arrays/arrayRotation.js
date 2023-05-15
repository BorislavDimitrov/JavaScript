function arrayRotation(array, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let firstElement = array[0];
    let nextElement = array[array.length - 1];

    for (let j = array.length - 1; j >= 1; j--) {
      let temp = array[j - 1];
      array[j - 1] = nextElement;
      nextElement = temp;
    }
    array[array.length - 1] = firstElement;
  }

  console.log(array);
}

arrayRotation([51, 47, 32, 61, 21], 2);
