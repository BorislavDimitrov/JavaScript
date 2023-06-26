function createArticle() {
  let titleElement = document.getElementById("createTitle");
  let contentElement = document.getElementById("createContent");

  if (titleElement.value !== "" && contentElement.value == "") {
    let headingElement = document.createElement("h3");
    let headingText = document.createTextNode(titleElement.value);
    headingElement.append(headingText);

    let paragraphElement = document.createElement("p");
    let paragraphText = document.createTextNode(contentElement.value);
    paragraphElement.append(paragraphText);

    let articleElement = document.createElement("article");
    articleElement.appendChild(headingElement);
    articleElement.appendChild(paragraphElement);

    let articlesElement = document.getElementById("articles");
    articlesElement.appendChild(articleElement);
  }

  titleElement.value = "";
  contentElement.value = "";
}
