const SELECTORS = {
  EMAILID: "email",
};

const validationTemplate = /[A-z]{1,}@[a-z]{1,}\.[a-z]{3,}/;

const getEmail = () => document.getElementById(SELECTORS.EMAILID);

const onChange = (e) => {
  let target = e.target;
  let email = target.value;
  let isValid = email.match(validationTemplate);

  if (!isValid) {
    target.classList.add("error");
  } else {
    target.classList.remove("error");
  }
};

function validate() {
  let email = getEmail();
  email.addEventListener("change", onChange);
}
