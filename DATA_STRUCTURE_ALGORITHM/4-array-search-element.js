// Search Element in Array

// use loop to search Elementsearch element with text input and button

const searchElementBtn = document.getElementById("search-element");
const searchPosBtn = document.getElementById("search-pos-button");

const arr = [1, 2, 3, 4, 5, 6];

function searchElement(indexNo) {
  return arr[indexNo];
}

function findElementPos(element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
}

function searchElement(indexNo) {
  return arr[indexNo];
}

searchElementBtn.addEventListener("click", (e) => {
  const indexNo = document.getElementById("indexNo").value;
  const updateConf = document.getElementById("update-confirm");

  const searchedEle = searchElement(indexNo);

  if (searchedEle) {
    updateConf.innerHTML = `Element at position ${indexNo}: ${searchedEle}`;
  }
  document.getElementById("indexNo").value = "";
});

searchPosBtn.addEventListener("click", (e) => {
  const elementToSearch = document.getElementById("element-to-search").value;
  const updateConf = document.getElementById("update-confirm-pos");
  const searchedElePos = findElementPos(+elementToSearch);
  console.log(searchedElePos);
  if (searchedElePos) {
    updateConf.innerHTML = `Element ${elementToSearch} is at index: ${searchedElePos}`;
  }
  document.getElementById("element-to-search").value = "";
});
