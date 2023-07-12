const SELECTORS = {
  NOTIFICATIONID: "notification",
};

const getNotification = () => document.getElementById(SELECTORS.NOTIFICATIONID);

function notify(message) {
  let notificationDiv = getNotification();
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";
  setTimeout(() => {
    notificationDiv.style.display = "none";
  }, 2000);
}
