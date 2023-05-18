function solve(char1, char2) {
  let result = charactersInRange(char1, char2);
  console.log(result.toString());

  function charactersInRange(char1, char2) {
    let firstCharCode = char1.charCodeAt(0);
    let secondCharCode = char2.charCodeAt(0);
    let smallerCode = Math.min(firstCharCode, secondCharCode);
    let biggerCode = Math.max(firstCharCode, secondCharCode);

    let charsInRangeArr = [];

    for (let i = smallerCode + 1; i < biggerCode; i++) {
      let currentChar = String.fromCharCode(i);
      charsInRangeArr.push(currentChar);
    }

    return charsInRangeArr;
  }
}

solve("C", "#");
