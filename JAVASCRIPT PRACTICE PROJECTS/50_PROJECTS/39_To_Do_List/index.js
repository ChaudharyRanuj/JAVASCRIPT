const list = document.querySelector(".list");
const input = document.querySelector(".search-input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerText = input.value;
    input.value = "";
    list.appendChild(listItem);
  }
});

// used event bubbling
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("line-through")) {
    e.target.classList.remove("line-through");
  } else {
    e.target.classList.add("line-through");
  }
});
