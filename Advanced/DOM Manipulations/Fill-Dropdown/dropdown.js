const SELECTORS = {
  MENUID: "menu",
  TEXTINPUTID: "newItemText",
  VALUEINPUTID: "newItemValue",
};

const getTextInput = () => document.getElementById(SELECTORS.TEXTINPUTID);

const getValueInput = () => document.getElementById(SELECTORS.VALUEINPUTID);

const getMenu = () => document.getElementById(SELECTORS.MENUID);

const clearField = (field) => (field.value = "");

function addItem() {
  let textField = getTextInput();
  let text = textField.value;
  let valueField = getValueInput();
  let value = valueField.value;
  let menu = getMenu();

  let newItem = document.createElement("option");
  newItem.innerText = text;
  newItem.value = value;
  menu.appendChild(newItem);
  clearField(textField);
  clearField(valueField);
}
