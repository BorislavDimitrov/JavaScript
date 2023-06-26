function solve() {
  let imageElements = document.querySelectorAll("img");

  for (let i = 0; i < imageElements.length; i++) {
    let imageEl = imageElements[i];
    imageEl.addEventListener("click", onClick);
  }

  function onClick(event) {
    let activatedElement = event.target;
    let cardName = activatedElement.name;
    let textNode = document.createTextNode(cardName);
    let parentElement = activatedElement.parentNode;
    let spanElements = document
      .getElementById("result")
      .querySelectorAll("span");

    let firstPlayerSpan = spanElements[0];
    let secondPlayerSpan = spanElements[2];

    if (
      firstPlayerSpan.textContent.length > 0 &&
      secondPlayerSpan.textContent.length > 0
    ) {
      firstPlayerSpan.textContent = "";
      secondPlayerSpan.textContent = "";
    }

    let spanElement = document.createElement("span");

    if (parentElement.id === "player1Div") {
      spanElement = spanElements[0];
    } else {
      spanElement = spanElements[2];
    }

    if (spanElement.textContent.length === 0) {
      activatedElement.src = "images/whiteCard.jpg";
      spanElement.appendChild(textNode);
    }

    if (
      firstPlayerSpan.textContent.length !== 0 &&
      secondPlayerSpan.textContent.length !== 0
    ) {
      let firstCardName = Number(firstPlayerSpan.textContent);
      let secondCardName = Number(secondPlayerSpan.textContent);
      let winningCard;
      let losingCard;

      if (firstCardName >= secondCardName) {
        winningCard = document
          .getElementById("player1Div")
          .querySelector(`img[name="${firstCardName}"]`);

        losingCard = document
          .getElementById("player2Div")
          .querySelector(`img[name="${secondCardName}"]`);
      } else {
        winningCard = document
          .getElementById("player2Div")
          .querySelector(`img[name="${secondCardName}"]`);

        losingCard = document
          .getElementById("player1Div")
          .querySelector(`img[name="${firstCardName}"]`);
      }

      winningCard.style.border = "2px solid green";
      losingCard.style.border = "2px solid red";

      let historyDivElemnt = document.getElementById("history");
      let historyTextNode = document.createTextNode(
        `[${firstCardName}] vs [${secondCardName}]`
      );
      historyDivElemnt.appendChild(historyTextNode);
    }
  }
}
