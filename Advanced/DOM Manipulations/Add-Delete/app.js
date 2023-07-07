const SELECTORS = {
  INPUT: "newText",
  LIST: "items",
};

const getInputValue = () => document.getElementById(SELECTORS.INPUT).value;

const clearInput = () => (document.getElementById(SELECTORS.INPUT).value = "");

const createElemnt = (value) => {
  let newElement = document.createElement("li");
  let deleteElement = createDeleteElement();
  let textNode = document.createTextNode(value);
  newElement.appendChild(textNode);
  newElement.appendChild(deleteElement);
  return newElement;
};

const addElement = (element) => {
  let list = document.getElementById(SELECTORS.LIST);
  list.appendChild(element);
};

const createDeleteElement = () => {
  let newElement = document.createElement("a");
  let textNode = document.createTextNode("[Delete]");
  newElement.appendChild(textNode);
  newElement.href = "javascript: void(0)";
  newElement.addEventListener("click", onClickDeleteItem);
  return newElement;
};

const deleteItem = (element) => element.remove();

const onClickDeleteItem = (event) => {
  let clickedElement = event.target;
  let clickedParentElement = clickedElement.parentNode;
  deleteItem(clickedParentElement);
};

const addItem = () => {
  let inputValue = getInputValue();
  clearInput();
  let newItem = createElemnt(inputValue);
  addElement(newItem);
};
