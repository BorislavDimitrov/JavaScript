const SELECTORS = {
  EMAIL: "[name=email]",
  RESULT: "result",
};

const RESULTS = {
  FOUND: "Deleted.",
  NOTFOUND: "Not found.",
};
const getInputEmail = () => document.querySelector(SELECTORS.EMAIL).value;

const clearInput = () => (document.querySelector(SELECTORS.EMAIL).value = "");

const getElementToDelete = (value) => {
  let trElements = document.querySelector("tbody").querySelectorAll("tr");
  let tdElement;

  trElements.forEach((tr) => {
    tr.querySelectorAll("td").forEach((td, index) => {
      if (index === 1 && td.innerText === value) {
        tdElement = td.parentNode;
      }
    });
  });

  return tdElement;
};

const deleteElement = (element) => element.remove();

const showResult = (result) =>
  (document.getElementById(SELECTORS.RESULT).innerText = result);

function deleteByEmail() {
  let emailInput = getInputEmail();
  clearInput();
  let elementToDelete = getElementToDelete(emailInput);

  if (elementToDelete != undefined) {
    deleteElement(elementToDelete);
    showResult(RESULTS.FOUND);
  } else {
    showResult(RESULTS.NOTFOUND);
  }
}
