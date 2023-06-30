function solve() {
  let btnElement = document.getElementById("searchBtn");
  btnElement.addEventListener("click", onClick);

  function onClick(event) {
    let coloredElements = document.querySelectorAll(".select");

    for (let i = 0; i < coloredElements.length; i++) {
      let coloredEl = coloredElements[i];
      coloredEl.className = "";
    }

    let inputElement = document.getElementById("searchField");
    let searchValue = inputElement.value;

    let trElements = document.querySelector("tbody").querySelectorAll("tr");

    for (let i = 0; i < trElements.length; i++) {
      let trEl = trElements[i];
      let tdElements = trEl.querySelectorAll("td");

      for (let j = 0; j < tdElements.length; j++) {
        let tdEl = tdElements[j];
        let tdValue = tdEl.innerHTML;

        if (tdValue.includes(searchValue)) {
          trEl.className = "select";
        }
      }
    }
  }
}
