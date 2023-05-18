function solve(num1, num2, num3) {
  let result = signCheck(num1, num2, num3);
  console.log(result);

  function signCheck(num1, num2, num3) {
    let negativesCount = 0;
    let result = "";

    if (num1 < 0) {
      negativesCount++;
    }

    if (num2 < 0) {
      negativesCount++;
    }

    if (num3 < 0) {
      negativesCount++;
    }

    if (negativesCount % 2 != 0) {
      result = "Negative";
    } else {
      result = "Positive";
    }

    return result;
  }
}

solve(-1, -1, -1);
