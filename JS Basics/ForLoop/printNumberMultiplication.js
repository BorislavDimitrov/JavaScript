function printMultiplication(number) {
  let num = Number(number);

  for (let index = 1; index <= 10; index++) {
    console.log(`${index} * ${num} = ${index * num}`);
  }
}

printMultiplication(`5`);
