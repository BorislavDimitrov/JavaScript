const SELECTORS = {
  BUTTON: ".button",
  TEXTCONTENTID: "extra",
};

const getButton = () => document.querySelector(SELECTORS.BUTTON);

const getText = () => document.getElementById(SELECTORS.TEXTCONTENTID);

function toggle() {
  let button = getButton();
  let text = getText();
  console.log(text);

  if (button.textContent === "More") {
    button.textContent = "Less";
    text.style.display = "block";
  } else {
    button.textContent = "More";
    text.style.display = "none";
  }
}
