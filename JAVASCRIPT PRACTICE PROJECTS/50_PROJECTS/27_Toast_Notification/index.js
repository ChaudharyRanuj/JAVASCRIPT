const btn = document.querySelector(".fetch-data-btn");
const toastMessage = document.querySelector(".toast-message");
const messages = [
  "first toast message",
  "second toast message",
  "third toast message",
  "fourth toast message",
  "fifth toast message",
  "sixth toast message",
];

function createMessage() {
  const randomMessage = Math.random() * messages.length;
  const message = messages[Math.floor(randomMessage)];
  const textMessage = document.createElement("p");
  textMessage.innerText = message;
  toastMessage.appendChild(textMessage);
}
btn.addEventListener("click", () => {
  btn.innerText = "Fetching Data...";
  btn.classList.add("disabled");

  // CREATE MESSAGE TO SHOW

  // DISAPPEAR THE TOAST MESSAGE

  setTimeout(() => {
    btn.innerText = "Data Fetched";
    btn.classList.add("data-fetched");
    // SHOW THE TOAST BOX
    toastMessage.classList.add("show-toast-message");
    createMessage();
  }, 500);

  setTimeout(() => {
    toastMessage.classList.remove("show-toast-message");
    toastMessage.innerHTML = "";
    btn.classList.remove("disabled");
    btn.classList.remove("data-fetched");
    btn.innerText = "Get Data";
  }, 1500);
});
