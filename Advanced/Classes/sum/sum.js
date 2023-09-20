const SELECTORS = {
  FIRSTNUMBERID: "num1",
  SECONDNUMBERID: "num2",
  RESULTID: "result",
  SUMBUTTONID: "sumButton",
  SUBTRACTBUTTONID: "subtractButton",
};

let modifier = (function () {
  let firstValueEl;
  let secondValueEl;
  let resultEl;
  let sumEl;
  let subtractEl;

  let init = function init(selector1, selector2, resultSelector) {
    firstValueEl = document.getElementById(selector1);
    secondValueEl = document.getElementById(selector2);
    resultEl = document.getElementById(resultSelector);
    sumEl = document.getElementById(SELECTORS.SUMBUTTONID);
    subtractEl = document.getElementById(SELECTORS.SUBTRACTBUTTONID);

    sumEl.addEventListener("click", () => {
      this.add();
    });

    subtractEl.addEventListener("click", () => {
      this.subtract();
    });
  };

  let add = function add() {
    console.log(firstValueEl);
    console.log(secondValueEl);
    console.log(resultEl);

    let result = Number(firstValueEl.value) + Number(secondValueEl.value);
    resultEl.value = result;
  };
  let subtract = function subtract() {
    let result = firstValueEl.value - secondValueEl.value;
    resultEl.value = result;
  };

  return { init, add, subtract };
})();

modifier.init(
  SELECTORS.FIRSTNUMBERID,
  SELECTORS.SECONDNUMBERID,
  SELECTORS.RESULTID
);
