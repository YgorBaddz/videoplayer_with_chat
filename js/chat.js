const chatBox = document.getElementById("chat_box");
const messageInput = document.getElementById("message_input");
const sendButton = document.getElementById("send_button");
const video = document.getElementById("video");
const chatContainer = document.querySelector(".chat_container");

const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

function displayMessages() {
  chatBox.innerHTML = "";

  messages.forEach((message) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  });
}

displayMessages();

sendButton.addEventListener("click", function () {
  const newMessage = messageInput.value;

  if (newMessage.trim() !== "") {
    messages.push(newMessage);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    displayMessages();
    messageInput.value = "";
  }
});

video.addEventListener("play", () => {
  chatContainer.classList.add("active");
});

video.addEventListener("pause", () => {
  chatContainer.classList.remove("active");
});
