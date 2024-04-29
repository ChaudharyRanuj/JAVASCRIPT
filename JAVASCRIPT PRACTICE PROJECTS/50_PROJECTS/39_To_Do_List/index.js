const list = document.querySelector(".list");
const input = document.querySelector(".search-input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    if (input.value !== "") {
      listItem.innerText = input.value;
    } else {
      return;
    }
    list.appendChild(listItem);
    input.value = "";
  }
});

// used event bubbling
list.addEventListener("click", (e) => {
  e.target.classList.toggle("line-through");
});
