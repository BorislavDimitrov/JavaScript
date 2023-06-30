function solve() {
  let buttonlements = document.querySelectorAll(".add-product");

  for (let i = 0; i < buttonlements.length; i++) {
    let btnEl = buttonlements[i];
    btnEl.addEventListener("click", onClickAdd);
  }

  let buttonElement = document.getElementsByClassName("checkout")[0];
  buttonElement.addEventListener("click", onClickCheckout);

  function onClickCheckout(event) {
    let textareaElement = document.querySelector("textarea");
    let textareaValue = textareaElement.innerHTML.trim("\n");
    let textLines = textareaValue.split("\n");

    let products = [];
    let sum = 0;

    for (let i = 0; i < textLines.length; i++) {
      let line = textLines[i];
      let words = line.split(" ");
      let name = words[1];
      let price = Number(words[3]);

      sum += price;

      if (!products.includes(name)) {
        products.push(name);
      }
    }

    let result = `You bougnt ${products.join(", ")} for ${sum}`;
    textareaElement.innerHTML = result;

    let checkBtnEl = event.target;
    checkBtnEl.disabled = true;
  }

  function onClickAdd(event) {
    let clickedElement = event.target;
    let productElement = clickedElement.closest(".product");
    let productName = productElement.querySelector(".product-title").innerHTML;
    let productPrice = productElement.querySelector(
      ".product-line-price"
    ).innerHTML;

    let text = `Added ${productName} for ${productPrice} money.\n`;
    let textNode = document.createTextNode(text);
    let textareaElement = document.querySelector("textarea");
    textareaElement.appendChild(textNode);
  }
}
