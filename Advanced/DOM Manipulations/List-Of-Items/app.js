const SELECTORS = {
  INPUT: "newItemText",
  LIST: "items",
};

const getInputValue = () => document.getElementById(SELECTORS.INPUT).value;

const clearInput = () => (document.getElementById(SELECTORS.INPUT).value = "");

const createElement = (value) => {
  let newElement = document.createElement("li");
  newElement.textContent = value;
  return newElement;
};

const addElement = (element) => {
  let ulElement = document.getElementById(SELECTORS.LIST);
  ulElement.appendChild(element);
};

const addItem = () => {
  let valueInput = getInputValue();
  clearInput();
  let elementToAdd = createElement(valueInput);
  console.log(elementToAdd);
  addElement(elementToAdd);
};
