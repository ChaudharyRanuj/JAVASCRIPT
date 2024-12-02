const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const n = matrix.length;
const m = matrix[0].length;

const rowMark = new Array(n).fill(0);
const colMark = new Array(m).fill(0);

function printAllElements(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowMark[i] = 1;
        colMark[j] = 1;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowMark[i] === 1 || colMark[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
}
printAllElements(matrix);

// rotate matrix by 90deg

// better approach

function rotateMatrix90Deg(matrix, n, n) {
  const newMatrix = [];
  for (let j = 0; j < n; j++) {
    let arr = [];
    for (let i = n - 1; i >= 0; i--) {
      arr.push(matrix[i][j]);
    }
    newMatrix.push(arr);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) [(matrix[i][j] = newMatrix[i][j])];
  }
  matrix;
}

rotateMatrix90Deg(matrix, n, n);

// optimal solution

function reverseArray() {}
var rotate = function (matrix, n) {
  // transpose
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // reverse
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
rotate(matrix, n);

// pritn matrix in spiral
var spiralOrder = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;
  let ans = [];
  while (top <= bottom && left <= right) {
    // left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    // right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
};
