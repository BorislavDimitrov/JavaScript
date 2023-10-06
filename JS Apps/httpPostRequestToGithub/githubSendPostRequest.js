(function () {
  const button = document.getElementById("send-btn");
  button.addEventListener("click", loadRepos);
})();

function loadRepos(e) {
  let body = { title: "SomeBug", body: "Some buug", labels: ["Yes", "No"] };
  const username = "your_username";
  const password = "your_password";

  const credentials = btoa(`${username}:${password}`);

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };

  let result = fetch(
    "https://api.github.com/repos/testnakov/test-nakov-repo/issues",
    requestOptions
  ).then((response) => {
    if (response.ok) {
      console.log("Not ok");
    }

    return response.json();
  });

  console.log(result);
}
