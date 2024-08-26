const mergeByPushBtn = document.getElementById("merge-by-push");
const mergeBySpreadBtn = document.getElementById("merge-by-spread");
const mergeByLoopBtn = document.getElementById("merge-by-loop");
const mergeByArrMthdBtn = document.getElementById("merge-by-array-method");
const mergeByWhileLoop = document.getElementById("merge-by-while-loop");

const arrFirst = [1, 2, 3, 4, 5, 6];
const arrSecond = [7, 8, 9, 10, 11, 12];

function pushMerge(firstArr, secondArr) {
  let newArr = [];
  firstArr.forEach((ele) => newArr.push(ele));
  secondArr.forEach((ele) => newArr.push(ele));
  return newArr;
}

mergeByPushBtn.addEventListener("click", function (e) {
  const margedArray = pushMerge(arrFirst, arrSecond);

  document.getElementById(
    "update-push-merge"
  ).innerHTML = `Merged array: [${margedArray.join(",")}]`;
});

mergeBySpreadBtn.addEventListener("click", function (e) {
  const margedArray = [...arrFirst, ...arrSecond];
  document.getElementById(
    "update-spread-merge"
  ).innerHTML = `Spread Merged array: [${margedArray.join(",")}]`;
});

mergeByLoopBtn.addEventListener("click", function (e) {
  const arr = [];
  let start = 0;
  for (let i = 0; i < arrFirst.length; i++) {
    arr[start] = arrFirst[i];
    start++;
    if (start > arrSecond.length - 1) {
      for (let j = 0; j < arrSecond.length; j++) {
        arr[start] = arrSecond[j];
        start++;
      }
    }
  }
  document.getElementById(
    "update-loop-merge"
  ).innerHTML = `Loop Merged array: [${arr.join(",")}]`;
});

mergeByArrMthdBtn.addEventListener("click", function (e) {
  const mergedArray = arrFirst.concat(arrSecond);
  document.getElementById(
    "update-by-array-method"
  ).innerHTML = `Concat Merged array: [${mergedArray.join(",")}]`;
});


mergeByWhileLoop.addEventListener("click", function (e) {
  const arr = [];
  let start = 0;

  while (start < arrFirst.length) {
    arr[start] = arrFirst[start];
    start++;
  }

  if (start > arrFirst.length - 1) {
    let j = 0;
    while (j < arrSecond.length) {
      arr[start] = arrSecond[j];
      start++;
      j++;
    }
  }

  const mergedArray = arr.slice();
  document.getElementById(
    "update-by-while-loop"
  ).innerHTML = `Concat Merged array: [${mergedArray.join(",")}]`;
});
