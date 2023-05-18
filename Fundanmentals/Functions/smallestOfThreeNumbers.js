function solve(num1, num2, num3) {
  let result = smallestOfThreeNumbers(num1, num2, num3);
  console.log(result);

  function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = Math.min(num1, num2, num3);
    return smallest;
  }
}

solve(1, 0, 3);
