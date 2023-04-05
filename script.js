const chatBody = document.querySelector('.chat-body');
const messageInput = document.querySelector('.chat-footer input[type="text"]');
const sendButton = document.querySelector('.chat-footer button');

function addMessage(messageText, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.innerHTML = `
    <p>${messageText}</p>
  `;
  messageContainer.appendChild(message);
  chatBody.appendChild(messageContainer);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    addMessage(messageText, 'sender');
    messageInput.value = '';
  }
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
