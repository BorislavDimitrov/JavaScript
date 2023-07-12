const SELECTORS = {
  ALLINPUTS: "input",
};

const getInputs = () => document.querySelectorAll(SELECTORS.ALLINPUTS);

const onFocus = (e) => {
  let target = e.target;
  let targetParent = target.parentNode;
  console.log(targetParent);
  targetParent.classList.add("focused");
};

const onBlur = (e) => {
  let target = e.target;
  let targetParent = target.parentNode;
  targetParent.classList.remove("focused");
  console.log(targetParent);
};

function focus() {
  let inputElements = getInputs();
  console.log(inputElements);

  inputElements.forEach((el) => {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  });
}
