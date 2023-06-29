function solve() {
  let buttonEl = document.querySelector("button");
  console.log(buttonEl);
  buttonEl.addEventListener("click", onClick);

  function onClick(event) {
    let inputEl = document.getElementById("input");
    console.log(inputEl);

    if (!isNaN(inputEl.value)) {
      let number = Number(inputEl.value);
      console.log(number);
      let result;

      let menuEl = document.getElementById("selectMenuTo");
      let selectedOption = menuEl.options[menuEl.selectedIndex].value;
      console.log(selectedOption);

      if (selectedOption === "binary") {
        result = number.toString(2);
      } else if (selectedOption === "hexadecimal") {
        result = number.toString(16);
      }
      console.log(result);

      let outPutElement = document.getElementById("result");
      outPutElement.value = result;
    }
  }
}
