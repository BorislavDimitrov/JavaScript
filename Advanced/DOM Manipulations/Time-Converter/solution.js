const SELECTORS = {
  SECONDSBTNID: "secondsBtn",
  MINUTESBTNID: "minutesBtn",
  HOURSBTNID: "hoursBtn",
  DAYSBTNID: "daysBtn",
  SECONDSINPUTID: "seconds",
  MINUTESINPUTID: "minutes",
  HOURSINPUTID: "hours",
  DAYSINPUTID: "days",
};

const getElementById = (id) => document.getElementById(id);

const convertSeconds = (e) => {
  let secondsInput = getElementById(SELECTORS.SECONDSINPUTID);
  let seconds = secondsInput.value;

  let minutes = Math.floor(seconds / 60);
  let minutesInput = getElementById(SELECTORS.MINUTESINPUTID);
  minutesInput.value = minutes;
  let hours = Math.floor(seconds / 3600);
  let hoursInput = getElementById(SELECTORS.HOURSINPUTID);
  hoursInput.value = hours;
  let daysInput = getElementById(SELECTORS.DAYSINPUTID);
  let days = Math.floor(seconds / 86400);
  daysInput.value = days;
};

const convertMinutes = (e) => {
  let minutesInput = getElementById(SELECTORS.MINUTESINPUTID);
  let minutes = minutesInput.value;

  let seconds = minutes * 60;
  let secondsInput = getElementById(SELECTORS.SECONDSINPUTID);
  secondsInput.value = seconds;
  let hours = Math.floor(minutes / 60);
  let hoursInput = getElementById(SELECTORS.HOURSINPUTID);
  hoursInput.value = hours;
  let daysInput = getElementById(SELECTORS.DAYSINPUTID);
  let days = Math.floor(minutes / 1440);
  daysInput.value = days;
};

const convertHours = (e) => {
  let hoursInput = getElementById(SELECTORS.HOURSINPUTID);
  let hours = hoursInput.value;

  let seconds = hours * 3600;
  let secondsInput = getElementById(SELECTORS.SECONDSINPUTID);
  secondsInput.value = seconds;
  let minutes = hours * 60;
  let minutesInput = getElementById(SELECTORS.MINUTESINPUTID);
  minutesInput.value = minutes;
  let daysInput = getElementById(SELECTORS.DAYSINPUTID);
  let days = Math.floor(hours / 24);
  daysInput.value = days;
};

const convertDays = (e) => {
  let daysInput = getElementById(SELECTORS.DAYSINPUTID);
  let days = daysInput.value;

  let seconds = days * 86400;
  let secondsInput = getElementById(SELECTORS.SECONDSINPUTID);
  secondsInput.value = seconds;
  let minutes = days * 1440;
  let minutesInput = getElementById(SELECTORS.MINUTESINPUTID);
  minutesInput.value = minutes;
  let hoursInput = getElementById(SELECTORS.HOURSINPUTID);
  let hours = days * 24;
  hoursInput.value = hours;
};

function attachEventsListeners() {
  let secondsBtn = getElementById(SELECTORS.SECONDSBTNID);
  secondsBtn.addEventListener("click", convertSeconds);
  let minutesBtn = getElementById(SELECTORS.MINUTESBTNID);
  minutesBtn.addEventListener("click", convertMinutes);
  let hoursBtn = getElementById(SELECTORS.HOURSBTNID);
  hoursBtn.addEventListener("click", convertHours);
  let daysBtn = getElementById(SELECTORS.DAYSBTNID);
  daysBtn.addEventListener("click", convertDays);
}
