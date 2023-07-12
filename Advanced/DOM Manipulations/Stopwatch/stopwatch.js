const SELECTORS = {
  STARTBUTTON: "startBtn",
  STOPBUTTON: "stopBtn",
  TIME: "time",
};

let counter = 0;

const disableButton = (button) => button.setAttribute("disabled", true);

const enableButton = (button) => button.removeAttribute("disabled");

const getStartButton = () => document.getElementById(SELECTORS.STARTBUTTON);

const getStopButton = () => document.getElementById(SELECTORS.STOPBUTTON);

const getTime = () => document.getElementById(SELECTORS.TIME);

const startCount = () => {
  let timeElement = getTime();
  counter++;
  let seconds = counter % 60;
  let minutes = (counter - seconds) / 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let result = `${minutes}:${seconds}`;
  timeElement.innerHTML = result;
};

let myInterval;

const startTime = () => {
  myInterval = setInterval(startCount, 1000);
  let startBtn = getStartButton();
  let stopBtn = getStopButton();
  console.log(stopBtn);
  disableButton(startBtn);
  enableButton(stopBtn);
};

const endTime = () => {
  counter = 0;
  var startBtn = getStartButton();
  let stopBtn = getStopButton();
  clearInterval(myInterval);
  enableButton(startBtn);
  disableButton(stopBtn);
};

function stopwatch() {
  let startButton = getStartButton();
  let stopButton = getStopButton();
  startButton.addEventListener("click", startTime);
  stopButton.addEventListener("click", endTime);
}
