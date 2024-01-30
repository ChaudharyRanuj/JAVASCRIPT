const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className += " invisible"), 0);
}

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave(e) {}

function dragEnd(e) {
  this.classList.remove("hold");
  this.classList.remove("invisible");
  console.log("drag end");
}

function dragDrop(e) {
 
    this.append(fill);

}
