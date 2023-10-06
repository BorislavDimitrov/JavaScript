(() => {
  const loadRepo = function (e) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const h2El = document.getElementById("repo-id");
        const textNode = document.createTextNode(this.responseText);
        console.log("inside event");
        console.log(this.responseText);
        h2El.appendChild(textNode);
      }
    };
    request.open(
      "GET",
      "https://api.github.com/repos/testnakov/test-nakov-repo/issues/1",
      true
    );

    request.send();
  };

  console.log("make event");
  const buttonEl = document.getElementById("send-btn");
  console.log(buttonEl);
  buttonEl.addEventListener("click", loadRepo);
})();
