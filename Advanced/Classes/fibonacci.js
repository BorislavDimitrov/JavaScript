let fib = (function () {
  let firstPrevious = 1;
  let secondPrevious = 0;
  return function () {
    let result = secondPrevious;
    secondPrevious = firstPrevious;
    firstPrevious = result + firstPrevious;

    return result;
  };
})();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
