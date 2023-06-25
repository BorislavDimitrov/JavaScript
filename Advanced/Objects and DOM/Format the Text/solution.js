function solve() {
  let paragraphElement = document.getElementById("input");
  let initialText = paragraphElement.innerHTML;

  let sentences = initialText.split(".");

  let divElement = document.getElementById("output");

  for (let i = 0; i < sentences.length; i += 3) {
    let currentParagraphSentences = [
      sentences[i],
      sentences[i + 1],
      sentences[i + 2],
    ];
    let newParagraphElement = document.createElement("p");
    let newTextNode = document.createTextNode(currentParagraphSentences.join());
    newParagraphElement.append(newTextNode);
    divElement.appendChild(newParagraphElement);
  }
}
