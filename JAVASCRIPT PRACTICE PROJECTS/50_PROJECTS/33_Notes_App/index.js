const addNoteBtn = document.querySelector(".add-note");

const notesLocStorage = JSON.parse(localStorage.getItem('notes'))

console.log(notesLocStorage);

notesLocStorage.forEach(note => addNote(note))

addNoteBtn.addEventListener("click", () => addNote());

function addNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = ` <div class="tools">
<button class="btn-edit">Edit</button>
<button class="btn-delete">Delete</button>
</div>
<div class="main hidden"></div>
<textarea class="textarea"></textarea>`;

  const editBtn = note.querySelector(".btn-edit");
  const deleteBtn = note.querySelector(".btn-delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector(".textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLocalStorage();
  });
  document.body.appendChild(note);
}

function updateLocalStorage() {
  const allTextarea = document.querySelectorAll(".textarea");
  const notes = [];

  allTextarea.forEach((note) => {
    if (note.value) {
      notes.push(note.value);
    }
  });
   localStorage.setItem("notes", JSON.stringify(notes));
}