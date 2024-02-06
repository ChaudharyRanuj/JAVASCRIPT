const button = document.getElementById("insert-element");

const arr = [1, 2, 3, 4, 5, 6];

function insertNewEle(indexNo, newElement) {
  let pos = indexNo;
  const newEle = newElement;
  for (let i = arr.length - 1; i > -1; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[pos] = newEle;
      }
    }
  }
  return arr;
}

button.addEventListener("click", (e) => {
  const indexNo = document.getElementById("indexNo").value;
  const newElement = document.getElementById("new-element").value;

  const updateConf = document.getElementById("update-confirm");
  const updateArr = document.getElementById("updated-array");

  const newArr = insertNewEle(+indexNo, +newElement);

  if (newArr) {
    updateConf.innerHTML = `New element ${newElement} inserted at position ${indexNo}`;
    updateArr.innerHTML = `Updated Array [${newArr.join(", ")}]`;
  }

  document.getElementById("indexNo").value = "";
  document.getElementById("new-element").value = "";
});
