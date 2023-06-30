function solve() {
  let paragraphAnswersElement = document.querySelectorAll(".answer-text");

  for (let i = 0; i < paragraphAnswersElement.length; i++) {
    let paraEl = paragraphAnswersElement[i];
    paraEl.addEventListener("click", onClick);
  }

  let rightAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];

  let rightAnswersCount = 0;
  let sectionNum = 0;

  function onClick(event) {
    if (sectionNum <= 2) {
      let clickedElement = event.target;
      let paragraphText = clickedElement.innerHTML;

      if (paragraphText == rightAnswers[sectionNum]) {
        rightAnswersCount++;
      }

      let sectionElement = clickedElement.closest("section");
      sectionElement.style.display = "none";

      sectionNum++;

      if (sectionNum <= 2) {
        let sectionElements = document.querySelectorAll("section");
        let nextSectionElement = sectionElements[sectionNum];
        nextSectionElement.style.display = "block";
      }

      if (sectionNum > 2) {
        let resultSectionEl = document.getElementById("results");
        let h1El = resultSectionEl.querySelector("h1");
        let result = "";

        if (rightAnswersCount < 3) {
          result = `You have ${rightAnswersCount} right answers.`;
        } else if (rightAnswersCount === 3) {
          result = `You are recognized as top JavaScript fan!`;
        }

        let textNode = document.createTextNode(result);
        h1El.appendChild(textNode);

        resultSectionEl.style.display = "block";
      }
    }
  }
}
