function solve() {
  let buttonElement = document.querySelector("button");
  buttonElement.addEventListener("click", onClick);

  function onClick(event) {
    let listElements = document.querySelectorAll("li");
    let inputElement = document.querySelector("input");
    let inputValue = inputElement.value;
    console.log(inputValue);
    let firstLetter = inputValue[0].toUpperCase();
    let finalWord = firstLetter + inputValue.slice(1).toLowerCase();
    console.log(finalWord);

    for (let i = 0; i < listElements.length; i++) {
      let liEl = listElements[i];
      var listItemLetter = String.fromCharCode(65 + i);
      if (firstLetter === listItemLetter) {
        liEl.innerHTML += ` ${finalWord}`;
        inputElement.value = "";
        break;
      }
    }
  }
}
