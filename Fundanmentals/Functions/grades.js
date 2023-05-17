function solve(grade) {
  grades(grade);
  function grades(grade) {
    if (grade < 3.0) {
      console.log(`Fail ${grade}`);
    } else if (grade >= 3.0 && grade < 3.5) {
      console.log(`Poor ${grade}`);
    } else if (grade >= 3.5 && grade < 4.5) {
      console.log(`Good ${grade}`);
    } else if (grade >= 4.5 && grade < 5.5) {
      console.log(`Very good ${grade}`);
    } else if (grade >= 5.5) {
      console.log(`Excelent ${grade}`);
    }
  }
}

solve(4.5);
