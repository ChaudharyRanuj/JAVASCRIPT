const button = document.getElementById("insert-element");

const arr = [1, 2, 3, 4, 5, 6];

function insertNewEle(indexNo) {
  let pos = indexNo;
  let remEle = arr[pos];
  for (let i = pos; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return { remElement: remEle, updatedArray: arr };
}

button.addEventListener("click", (e) => {
  const indexNo = document.getElementById("indexNo").value;
  const updateConf = document.getElementById("update-confirm");
  const updateArr = document.getElementById("updated-array");

  const newObject = insertNewEle(+indexNo);

  if (newObject) {
    updateConf.innerHTML = `New element ${newObject.remElement} delted at from ${indexNo}`;
    updateArr.innerHTML = `Updated Array [${newObject.updatedArray.join(
      ", "
    )}]`;
  }

  document.getElementById("indexNo").value = "";
});
