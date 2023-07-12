const SELECTORS = {
  GRADIENTID: "gradient",
  RESULTID: "result",
};

const getGradient = () => document.getElementById(SELECTORS.GRADIENTID);

const getResultElement = () => document.getElementById(SELECTORS.RESULTID);

const onMouseOver = (e) => {
  let resultElement = getResultElement();
  var rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  resultElement.innerHTML = `${Math.round(x / 3)} %`;
};

function attachGradientEvents() {
  let gradient = getGradient();
  gradient.addEventListener("mousemove", onMouseOver);
}

document.onload = attachGradientEvents();
