function solve(numbers) {
  let arr = [];

  for (let element of numbers) {
    if (element < 0) {
      arr.unshift(element);
    } else {
      arr.push(element);
    }
  }

  console.log(arr);
}

solve([3, -2, 0, -1]);
