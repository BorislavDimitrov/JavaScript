function growingWord() {
  let divElement = document.getElementsByClassName("conditions")[0];

  let elementColor = divElement.style.backgroundColor;

  if (elementColor === "") {
    divElement.style.backgroundColor = "blue";
  } else if (elementColor === "blue") {
    divElement.style.backgroundColor = "green";
  } else if (elementColor === "green") {
    divElement.style.backgroundColor = "red";
  } else if (elementColor == "red") {
    divElement.style.backgroundColor = "blue";
  }

  let insideElements = divElement.querySelectorAll("p");

  for (let i = 0; i < insideElements.length; i++) {
    let currentElement = insideElements[i];
    let fontSize = currentElement.style.fontSize;

    console.log(fontSize);
    if (fontSize === "") {
      currentElement.style.fontSize = "2px";
    } else {
      let match = Number(fontSize.match(/[0-9]+/));
      let finalSize = match * 2 + "px";
      currentElement.style.fontSize = finalSize;
    }
  }
}
