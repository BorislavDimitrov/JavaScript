function sumNumbers(input) {
  let goalNum = Number(input[0]);
  let sum = 0;
  let index = 1;

  while (sum < goalNum) {
    sum += Number(input[index]);
    index++;
  }

  console.log(sum);
}

sumNumbers(["100", "10", "45", "10", "20", "20"]);
