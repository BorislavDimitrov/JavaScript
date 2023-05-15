function mergeArrays(array1, array2) {
  let array3 = [];

  for (let i = 0; i < array1.length; i++) {
    let array1CurrentElement = array1[i];
    let array2CurrentElement = array2[i];

    if (i % 2 === 0) {
      array3[i] = Number(array1CurrentElement) + Number(array2CurrentElement);
    } else {
      let concatElements =
        array1CurrentElement.toString() + array2CurrentElement;
      array3[i] = concatElements;
    }
  }
  console.log(0 % 2);
  console.log(array3.join("-", array3));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
