window.addEventListener("load", solution);

function solution() {
  let inputElements = [];
  let employeeEl = document.getElementById("employee");
  inputElements.push(employeeEl);
  let employeeValue;

  let categoryEl = document.getElementById("category");
  inputElements.push(categoryEl);
  let categoryValue;

  let urgencyEl = document.getElementById("urgency");
  inputElements.push(urgencyEl);
  let urgencyValue;

  let teamEl = document.getElementById("team");
  inputElements.push(teamEl);
  let teamValue;

  let descriptionEl = document.getElementById("description");
  inputElements.push(descriptionEl);
  let descriptionValue;

  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", addHandler);

  let previewUlEl = document.querySelector(".preview-list");

  function addHandler(e) {
    e.preventDefault();

    if (validateInput()) {
      return;
    }

    clearInput();

    addBtn.disabled = true;
    let liEl = createNewLiElement();
    previewUlEl.appendChild(liEl);
  }

  function createNewLiElement() {
    const newLiEl = document.createElement("li");
    newLiEl.classList.add("problem-content");

    const newArticleEl = document.createElement("article");

    const employeeParagraphEl = document.createElement("p");
    employeeParagraphEl.textContent = `From: ${employeeValue}`;
    newArticleEl.appendChild(employeeParagraphEl);

    const categoryParagraphEl = document.createElement("p");
    categoryParagraphEl.textContent = `Category: ${categoryValue}`;
    newArticleEl.appendChild(categoryParagraphEl);

    const urgencyParagraphEl = document.createElement("p");
    urgencyParagraphEl.textContent = `Urgency: ${urgencyValue}`;
    newArticleEl.appendChild(urgencyParagraphEl);

    const teamParagraphEl = document.createElement("p");
    teamParagraphEl.textContent = `Assigned to: ${teamValue}`;
    newArticleEl.appendChild(teamParagraphEl);

    const descriptionParagraphEl = document.createElement("p");
    descriptionParagraphEl.textContent = `Description: ${descriptionValue}`;
    newArticleEl.appendChild(descriptionParagraphEl);

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

  function validateInput() {
    let values = [];
    employeeValue = employeeEl.value;
    categoryValue = categoryEl.value;
    urgencyValue = urgencyEl.value;
    teamValue = teamEl.value;
    descriptionValue = descriptionEl.value;
    values.push(employeeValue);
    values.push(categoryValue);
    values.push(urgencyValue);
    values.push(teamValue);
    values.push(descriptionValue);

    return values.includes("");
  }

  function clearInput() {
    for (let i = 0; i < inputElements.length; i++) {
      let element = inputElements[i];
      element.value = "";
    }
  }

  function editHandler(e) {
    let liEl = previewUlEl.firstElementChild;
    addBtn.disabled = false;
    let paragraphEls = liEl.querySelectorAll("p");
    for (let i = 0; i < paragraphEls.length; i++) {
      const element = paragraphEls[i];
      console.log(element.textContent);
    }

    employeeEl.value = paragraphEls[0].textContent.replace("From: ", "");
    categoryEl.value = paragraphEls[1].textContent.replace("Category: ", "");
    urgencyEl.value = paragraphEls[2].textContent.replace("Urgency: ", "");
    teamEl.value = paragraphEls[3].textContent.replace("Assigned to: ", "");
    descriptionEl.value = paragraphEls[4].textContent.replace(
      "Description: ",
      ""
    );
    liEl.remove();
  }

  function continueHandler(e) {
    let liEl = previewUlEl.firstElementChild;
    let copyLiEl = liEl.cloneNode(true);
    liEl.remove();

    copyLiEl.querySelector(".edit-btn").remove();
    copyLiEl.querySelector(".continue-btn").remove();

    let resolvedBtnEl = document.createElement("button");
    resolvedBtnEl.textContent = "Resolved";
    resolvedBtnEl.classList.add("resolve-btn");
    resolvedBtnEl.addEventListener("click", resolveHandler);
    copyLiEl.appendChild(resolvedBtnEl);

    let confirmUlEl = document.querySelector(".pending-list");
    confirmUlEl.appendChild(copyLiEl);
  }

  function resolveHandler(e) {
    let pendingUlEl = document.querySelector(".pending-list");
    let liEl = pendingUlEl.firstElementChild;
    let copyLiEl = liEl.cloneNode(true);
    liEl.remove();

    copyLiEl.querySelector(".resolve-btn").remove();

    let cleardBtnEl = document.createElement("button");
    cleardBtnEl.textContent = "Clear";
    cleardBtnEl.classList.add("clear-btn");
    cleardBtnEl.addEventListener("click", clearHandler);
    copyLiEl.appendChild(cleardBtnEl);

    let confirmUlEl = document.querySelector(".resolved-list");
    confirmUlEl.appendChild(copyLiEl);
  }

  function clearHandler(e) {
    let confirmUlEl = document.querySelector(".resolved-list");
    confirmUlEl.firstChild.remove();
  }
}
