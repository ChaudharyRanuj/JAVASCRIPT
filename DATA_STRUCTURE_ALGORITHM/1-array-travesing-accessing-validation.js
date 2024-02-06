// ARRAY TRAVERSING AND ACCESSING
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function listEle(ele, idx) {
  return `<li>Element at Index ${idx}: ${ele}</li>`;
}

function traverssingArr(arr, listEle) {
  const arrEle = document.getElementById("array-elements");
  const markUp = arr.map(listEle).join("");
  arrEle.innerHTML = markUp;
}

function accessArrEle(arr) {
  const button = document.getElementById("submit");
  button.addEventListener("click", function (e) {
    let indexNo = document.getElementById("indexNo").value;
    indexNo = parseFloat(indexNo);

    if (indexNo >= arr.length || indexNo <= -1) {
      document.getElementById("output").innerHTML = `<b>Enter ${
        indexNo <= -1
          ? "number is less than or equal -1"
          : "Number is greater than the arrray length"
      } . Enter no between -1 and ${arr.length}`;
    } else if (indexNo < arr.length && indexNo > -1) {
      document.getElementById(
        "output"
      ).innerHTML = `<b>Element at index ${indexNo}:</b> ${arr[indexNo]} `;
    } else {
      alert("Enter valid input.");
    }
    
  });
}

function init() {
  accessArrEle(arr);
  traverssingArr(arr, listEle);
}
init();
