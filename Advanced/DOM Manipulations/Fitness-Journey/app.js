window.addEventListener("load", solve);

function solve() {
  let inputElements = [];

  const nameInputEl = document.getElementById("name");
  inputElements.push(nameInputEl);
  let nameValue;

  const emailInputEl = document.getElementById("email");
  inputElements.push(emailInputEl);
  let emailValue;

  const numberInputEl = document.getElementById("contact-number");
  inputElements.push(numberInputEl);
  let numberValue;

  const classTypeInputEl = document.getElementById("class-type");
  inputElements.push(classTypeInputEl);
  let classTypleValue;

  const classTimeEl = document.getElementById("class-time");
  inputElements.push(classTimeEl);
  let classTimeValue;

  const buttonEl = document.getElementById("next-btn");
  buttonEl.addEventListener("click", nextHandler);

  function validateInput() {
    let values = [];
    nameValue = nameInputEl.value;
    emailValue = emailInputEl.value;
    numberValue = numberInputEl.value;
    classTypleValue = classTypeInputEl.value;
    classTimeValue = classTimeEl.value;
    values.push(nameValue);
    values.push(emailValue);
    values.push(numberValue);
    values.push(classTypleValue);
    values.push(classTimeValue);

    return values.includes("");
  }

  function nextHandler(e) {
    e.preventDefault();

    if (validateInput()) {
      return;
    }
    clearInput();

    buttonEl.disabled = true;
    const newLiEl = createNewLiElement();
    const ulEl = document.querySelector(".class-info");
    ulEl.appendChild(newLiEl);
  }

  function clearInput() {
    for (let i = 0; i < inputElements.length; i++) {
      let element = inputElements[i];
      element.value = "";
    }
  }

  function createNewLiElement() {
    const newLiEl = document.createElement("li");
    newLiEl.classList.add("info-item");

    const newArticleEl = document.createElement("article");
    newArticleEl.classList.add("personal-info");

    const nameParagraphEl = document.createElement("p");
    nameParagraphEl.textContent = nameValue;
    newArticleEl.appendChild(nameParagraphEl);

    const emailParagraphEl = document.createElement("p");
    emailParagraphEl.textContent = emailValue;
    newArticleEl.appendChild(emailParagraphEl);

    const numberParagraphEl = document.createElement("p");
    numberParagraphEl.textContent = numberValue;
    newArticleEl.appendChild(numberParagraphEl);

    const classTypeParagraphEl = document.createElement("p");
    classTypeParagraphEl.textContent = classTypleValue;
    newArticleEl.appendChild(classTypeParagraphEl);

    const classTimeParagraphEl = document.createElement("p");
    classTimeParagraphEl.textContent = classTimeValue;
    newArticleEl.appendChild(classTimeParagraphEl);

    newLiEl.appendChild(newArticleEl);

    let editBtnEl = document.createElement("button");
    editBtnEl.textContent = "Edit";
    editBtnEl.classList.add("edit-btn");
    editBtnEl.addEventListener("click", editHandler);
    newLiEl.appendChild(editBtnEl);

    let continueBtnEl = document.createElement("button");
    continueBtnEl.textContent = "Continue";
    continueBtnEl.classList.add("continue-btn");
    continueBtnEl.addEventListener("click", continueHandler);
    newLiEl.appendChild(continueBtnEl);

    return newLiEl;
  }

  function editHandler(e) {
    let ulEl = document.querySelector(".class-info");
    let liEl = ulEl.firstElementChild;
    buttonEl.disabled = false;
    let paragraphEls = liEl.querySelectorAll("p");

    nameInputEl.value = paragraphEls[0].textContent;
    emailInputEl.value = paragraphEls[1].textContent;
    numberInputEl.value = paragraphEls[2].textContent;
    classTypeInputEl.value = paragraphEls[3].textContent;
    classTimeEl.value = paragraphEls[4].textContent;
    liEl.remove();
  }

  function continueHandler(e) {
    let ulEl = document.querySelector(".class-info");
    let liEl = ulEl.firstElementChild;
    liEl.classList.remove("info-item");
    let copyLiEl = liEl.cloneNode(true);
    copyLiEl.classList.add("continue-info");
    liEl.remove();

    copyLiEl.querySelector(".edit-btn").remove();
    copyLiEl.querySelector(".continue-btn").remove();

    let cancelBtnEl = document.createElement("button");
    cancelBtnEl.textContent = "Cancel";
    cancelBtnEl.classList.add("cancel-btn");
    cancelBtnEl.addEventListener("click", cancelHandler);
    copyLiEl.appendChild(cancelBtnEl);

    let confirmBtnEl = document.createElement("button");
    confirmBtnEl.textContent = "Confirm";
    confirmBtnEl.classList.add("confirm-btn");
    confirmBtnEl.addEventListener("click", confirmHandler);
    copyLiEl.appendChild(confirmBtnEl);

    let confirmUlEl = document.querySelector(".confirm-class");
    confirmUlEl.appendChild(copyLiEl);
  }

  function cancelHandler(e) {
    document.querySelector(".continue-info").remove();
    buttonEl.disabled = false;
  }

  function confirmHandler(e) {
    document.getElementById("main").remove();
    let h1El = document.createElement("h1");
    h1El.textContent =
      "Thank you for scheduling your appointment, we look forward to seeing you!";
    h1El.setAttribute("id", "thank-you");

    document.body.appendChild(h1El);

    let reloadBtn = document.createElement("button");
    reloadBtn.textContent = "Done";
    reloadBtn.setAttribute("id", "done-btn");
    reloadBtn.addEventListener("click", reloadHandler);
    document.body.appendChild(reloadBtn);
  }

  function reloadHandler() {
    location.reload();
  }
}
