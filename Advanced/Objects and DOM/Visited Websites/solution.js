function solve() {
  let siteElements = document.getElementsByClassName("link-1");

  for (let i = 0; i < siteElements.length; i++) {
    let element = siteElements[i];
    element.addEventListener("click", onClick);
  }

  function onClick(event) {
    let activatedElement = event.target;
    console.log(activatedElement.parentNode);
    let paragraphElement = activatedElement
      .closest(".link-1")
      .querySelectorAll("p")[0];
    let paragraphText = paragraphElement.innerHTML;
    let paragraphTextSplitted = paragraphText.split(" ");
    let numberOfClicks = Number(paragraphTextSplitted[1]);
    numberOfClicks++;

    paragraphTextSplitted[1] = numberOfClicks;
    paragraphText = paragraphTextSplitted.join(" ");
    paragraphElement.innerHTML = paragraphText;
  }
}
