// printe 1 to N recrsively

class Solution {
  printNos(N) {
    //code here
    const arr = [];
    function printNumbers(N) {
      if (N == 0) return;
      printNumbers(N - 1);
      arr.push(N);
      return arr;
    }
    const res = printNumbers(N);
    console.log(...res);
  }
}

// print N times
