const SELECTORS = {
  CONTENTID: "content",
};

const createDiv = () => document.createElement("div");

const createParagraph = () => document.createElement("p");

const getContentDiv = () => document.getElementById(SELECTORS.CONTENTID);

const onClick = (e) => {
  let target = e.target;
  let paragraph = target.querySelector("p");
  paragraph.style.display = "block";
};

function create(words) {
  let contentDiv = getContentDiv();
  for (let i = 0; i < words.length; i++) {
    let div = createDiv();
    let paragraph = createParagraph();
    div.addEventListener("click", onClick);
    paragraph.textContent = words[i];
    paragraph.style.display = "none";
    div.appendChild(paragraph);
    contentDiv.appendChild(div);
  }
}
