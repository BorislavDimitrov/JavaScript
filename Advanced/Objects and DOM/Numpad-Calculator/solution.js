function solve() {
  let buttonElements = document.querySelectorAll("button");

  for (let i = 0; i < buttonElements.length; i++) {
    let buttonEl = buttonElements[i];
    buttonEl.addEventListener("click", onClick);
  }

  function onClick(event) {
    let buttonElement = event.target;
    let buttonVal = buttonElement.value;
    console.log(buttonVal);
    let expressionParagraphEl = document.getElementById("expressionOutput");
    let expressionValue = expressionParagraphEl.textContent;
    let resultParagraphEl = document.getElementById("resultOutput");
    let resultValue = resultParagraphEl.textContent;
    let newExpression = "";

    if (buttonVal === "Clear") {
      expressionParagraphEl.textContent = "";
      resultParagraphEl.textContent = "";
    } else if (isNaN(buttonVal) === false || buttonVal === ".") {
      newExpression = expressionValue + buttonVal;
      expressionParagraphEl.textContent = newExpression;
    } else if (
      buttonVal === "-" ||
      buttonVal === "+" ||
      buttonVal === "/" ||
      buttonVal === "*"
    ) {
      newExpression = expressionValue + ` ${buttonVal} `;
      expressionParagraphEl.textContent = newExpression;
    } else if (buttonVal === "=") {
      let expressionParts = expressionValue.split(" ");
      let leftPart = Number(expressionParts[0]);
      let sign = expressionParts[1];
      let rightPart = Number(expressionParts[2]);
      let result;

      if (sign === "+") {
        result = leftPart + rightPart;
      } else if (sign === "-") {
        result = leftPart - rightPart;
      } else if (sign === "/") {
        result = leftPart / rightPart;
      } else if (sign === "*") {
        result = leftPart * rightPart;
      }

      resultParagraphEl.textContent = result;
    }
  }
}
