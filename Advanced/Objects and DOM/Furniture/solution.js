function solve() {
  let buttonElements = document.querySelectorAll("button");
  let generateButtonEl = buttonElements[0];
  generateButtonEl.addEventListener("click", onClickGenerate);
  let buyButtonEl = buttonElements[1];
  buyButtonEl.addEventListener("click", onClickBuy);

  function onClickBuy(event) {
    let checkboxElements = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    let sumPrice = 0;
    let fornitures = [];
    let sumDecFactor = 0;

    for (let i = 0; i < checkboxElements.length; i++) {
      let checkbox = checkboxElements[i];
      checkbox.style.checked = false;
      let trEl = checkbox.closest("tr");
      let tdElements = trEl.querySelectorAll("td");
      let name = tdElements[1].querySelector("p").textContent;
      let price = Number(tdElements[2].querySelector("p").textContent);
      let decFactor = Number(tdElements[3].querySelector("p").textContent);

      fornitures.push(name);
      sumPrice += price;
      sumDecFactor += decFactor;
    }

    let result = `Bought forniture ${fornitures.join(
      ", "
    )}\nTotal price: ${sumPrice.toFixed(2)}\nAverage decoration factor: ${
      sumDecFactor / fornitures.length
    }`;
    let textNode = document.createTextNode(result);
    let textarea = document.querySelectorAll("textarea")[1];
    textarea.appendChild(textNode);
  }

  function onClickGenerate(event) {
    let textareaElement = document.querySelector("textarea");
    let textareaValue = textareaElement.value;
    let fornitureInfo = JSON.parse(textareaValue);
    textareaElement.value = "";

    for (let i = 0; i < fornitureInfo.length; i++) {
      const data = fornitureInfo[i];
      let tbodyElement = document.querySelector("tbody");
      let trElement = document.createElement("tr");

      let imageTdElement = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.src = data["img"];
      imageTdElement.appendChild(imgElement);
      trElement.appendChild(imageTdElement);

      let nameTdElement = document.createElement("td");
      let paragrahpNameElement = document.createElement("p");
      let nameTextNode = document.createTextNode(data["name"]);
      paragrahpNameElement.appendChild(nameTextNode);
      nameTdElement.appendChild(paragrahpNameElement);
      trElement.appendChild(nameTdElement);

      let priceTdElement = document.createElement("td");
      let paragrahpPriceElement = document.createElement("p");
      let priceTextNode = document.createTextNode(data["price"]);
      paragrahpPriceElement.appendChild(priceTextNode);
      priceTdElement.appendChild(paragrahpPriceElement);
      trElement.appendChild(priceTdElement);

      let decFactorTdElement = document.createElement("td");
      let paragraphDecFactorElement = document.createElement("p");
      let decFactorTextNode = document.createTextNode(data["decFactor"]);
      paragraphDecFactorElement.appendChild(decFactorTextNode);
      decFactorTdElement.appendChild(paragraphDecFactorElement);
      trElement.appendChild(decFactorTdElement);

      let checkboxTdElement = document.createElement("td");
      let checkboxElement = document.createElement("input");
      checkboxElement.type = "checkbox";
      checkboxTdElement.appendChild(checkboxElement);
      trElement.appendChild(checkboxTdElement);

      tbodyElement.appendChild(trElement);
    }
  }
}
