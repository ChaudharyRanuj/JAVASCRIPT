const textarea = document.querySelector("textarea");
const tags = document.querySelector(".tags");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const choices = input
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());
  tags.innerHTML = "";
  choices.forEach((text) => {
    const span = document.createElement("span");
    span.innerText = text;
    tags.appendChild(span);
  });
}

function randomSelect() {
  const times = 10;
  const interval = setInterval(() => {
    const randomTags = pickRandomTags();
    highlightTag(randomTags);

    setTimeout(() => {
      unHighlightTag(randomTags);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    highlightTag(randomTags);
    setTimeout(() => {
      const randomTags = pickRandomTags();
      highlightTag(randomTags);
    }, 100);
  }, 100 * times);
}

function pickRandomTags() {
  const tags = document.querySelectorAll(".tags span");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
