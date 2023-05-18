function solve(number, power) {
  let result = mathPower(number, power);

  console.log(result);
  function mathPower(number, power) {
    let sum = 1;

    for (let i = 1; i <= power; i++) {
      sum *= number;
    }

    return sum;
  }
}

solve(3, 4);
