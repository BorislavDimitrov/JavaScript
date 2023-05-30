function solve(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let previousNums = arr.slice(-k);
    let sum = 0;

    for (let num of previousNums) {
      sum += num;
    }

    arr.push(sum);
  }

  console.log(arr);
}
solve(8, 2);
