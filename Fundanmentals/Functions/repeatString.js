function solve(str, n) {
  let repeatStr = repeatString(str, n);
  console.log(repeatStr);

  function repeatString(str, n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
      result += str;
    }

    return result;
  }
}

solve("abc", 3);
