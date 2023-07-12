const SELECTORS = {
  FIRSTNUMBERID: "firstNumber",
  SECONDNUMBERID: "secondNumber",
  RESULTID: "result",
};

const getInput = (id) => document.getElementById(id).value;

const getResultDiv = () => document.getElementById(SELECTORS.RESULTID);

function subtract() {
  let firstValue = getInput(SELECTORS.FIRSTNUMBERID);
  let secondValue = getInput(SELECTORS.SECONDNUMBERID);
  let result = firstValue - secondValue;
  let resultEl = getResultDiv();
  resultEl.textContent = result;
}
