function solve() {
  let sendButtonElement = document.getElementById("send");
  debugger;
  sendButtonElement.addEventListener("click", onClick);

  function onClick(event) {
    let textareaElement = document.getElementById("chat_input");
    console.log(textareaElement);
    let text = textareaElement.value;
    console.log(text);
    if (text.length !== 0) {
      let textNode = document.createTextNode(text);
      let divMessage = document.createElement("div");
      divMessage.className = "message my-message";
      divMessage.appendChild(textNode);
      textareaElement.value = "";
      let messagesBoxElement = document.getElementById("chat_messages");
      messagesBoxElement.appendChild(divMessage);
    }
  }
}
