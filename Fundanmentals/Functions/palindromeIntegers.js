function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];

    console.log(palindromeIntegers(currentNumber));
  }

  function palindromeIntegers(number) {
    let reverseNumber = number.toString().split("").reverse().join("");

    if (reverseNumber === number.toString()) {
      return true;
    } else {
      return false;
    }
  }
}

solve([32, 2, 232, 1010]);
