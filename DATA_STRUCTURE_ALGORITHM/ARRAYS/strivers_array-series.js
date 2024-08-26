// Q1.Largest Element in Array
// ######################################################

function findTheLargest(arr, n) {
  //******* BRUTE FORCE ****************
  arr.sort((a, b) => a - b);
  return arr[n - 1];

  // TIME COMPLEXITY : O(nlogn)
  // SPACE COMPLEXITY : O(1)

  // OPTIMISED APPROACH

  let largest = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;

  // TIME COMPLEXITY : O(n)
  // SPACE COMPLEXITY : O(1)
}

// Q2.Second Largest Element in Array
// ######################################################

function print2largest(arr) {
  //******* BRUTE FORCE ****************
  let n = arr.length;
  arr.sort((a, b) => a - b);
  const firstLargest = arr[n - 1];

  let i = n - 1;
  let secondLargest = Infinity;
  while (i >= 0) {
    if (arr[i] != firstLargest) {
      secondLargest = arr[i];
      return secondLargest;
    }
    i--;
  }

  return -1;

  // TIME COMPLEXITY : nlogn + n
  // SPACE COMPLEXITY : O(1)
}

//******* BETTER APPROACH ****************

function findFirstLargest(arr, n) {
  let largest = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

function findSecondLargest(arr, n, firstLargest) {
  let secondLargest = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] < firstLargest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

class Solution {
  // Function returns the second largest element
  print2largest(arr) {
    // Code Here
    const n = arr.length;
    const firstLargest = findFirstLargest(arr, n);
    let secondLargest = findSecondLargest(arr, n, firstLargest);

    return secondLargest;
  }
}

// TIME COMPLEXITY : O(n) + O(n) = O(2n)
// SPACE COMPLEXITY: O(1)

// OPTIMISED CODE

class Solution {
  // Function returns the second largest element
  print2largest(arr) {
    // Code Here
    const n = arr.length;
    let largest = -Infinity;
    let secondLargest = -1;

    for (let i = 0; i < n; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    }

    return secondLargest;
  }
}

// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY: O(1)

// Q3. Check if array is sorted
// ######################################################

// BRUTE FORCE
class Solution {
  arraySortedOrNot(arr) {
    // code here
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          return false;
        }
      }
    }

    return true;
  }
}

// TIME COMPLEXITY : O(n2)
// SPACE COMPLEXITY: O(1)

// OPTIMISED CODE
class Solution {
  arraySortedOrNot(arr) {
    // code here
    if (arr.length == 1) {
      return true;
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] <= arr[i]) {
      } else {
        return false;
      }
    }

    return true;
  }
}
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY: O(1)

// Q4. Remove duplicates from Sorted Array
// ######################################################

// BRUTE FORCE
// *********************************
var removeDuplicates = function (arr) {
  let n = arr.length;
  let uniqueElements = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) {
      uniqueElements.push(arr[i]);
    }
  }

  for (let i = 0; i < uniqueElements.length; i++) {
    arr[i] = uniqueElements[i];
  }

  return uniqueElements.length;
};

// BRUTE FORCE 2
// *********************************

var removeDuplicates = function (arr) {
  let n = arr.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    }
  }
  let i = 0;
  for (const value of set) {
    arr[i] = value;
    i++;
  }

  return set.size;
};
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY: O(n)

// OPTIMISED FORCE
// *********************************

var removeDuplicates = function (arr) {
  let n = arr.length;
  let j = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  return j + 1;
};
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY: O(n)

// Q5. Left Rotate the Array by One
// ######################################################
const arr = [1, 2, 3, 4, 5, 6, 7];

// BRUTE FORCE
// *************
function rotateArrayKTimes(arr, k) {
  let i = 0;
  let n = arr.length;
  let d = k % arr.length;

  let temp = [];

  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = n - d; i < arr.length; i++) {
    arr[i] = temp[i - (n - d)];
  }

  return arr;
}

// TIME COMPLEXITY : O(d) + O(d) + O(n - d) = O(n + d)
// SPACE COMPLEXITY: O(d)

function reverseArray(start, end, arr) {
  if (start <= end) return;
  [arr[start], arr[end]] = [arr[end], arr[end]];
  reverseArray(start + 1, end - 1, arr);
}

// OPTIMISED SOLUTION
// *************
var rotate = function (arr, k) {
  let n = arr.length;
  k = k % n;

  function reverseArray(start, end, arr) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  //  reverse first k elements
  reverseArray(0, n - k - 1, arr);

  //  reverse last n - k elements
  reverseArray(n - k, n - 1, arr);

  // reverse whole array
  reverseArray(0, n - 1, arr);
};

// TIME COMPLEXITY : O(k) + O(n - k) - O(n) = O(2n)
// SPACE COMPLEXITY : O(1)

// Q5.(a) RIGHT Rotate the Array by One (variant of quetion 5)
var rotate = function (arr, k) {
  let n = arr.length;
  k = k % n;

  function reverseArray(start, end, arr) {
    if (start >= end) return;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverseArray(start + 1, end - 1, arr);
  }
  //  reverse last n - k elements
  reverseArray(n - k, n - 1, arr);

  //  reverse first k elements
  reverseArray(0, n - k - 1, arr);

  // reverse whole array
  reverseArray(0, n - 1, arr);
};

// Q6.Move Zeros to end

// brute force
let j = arr.length - 1;

while (j >= 0) {
  if (arr[j] == 0) {
    let i = j;
    let temp = arr[i];
    while (i < arr.length - 1 && arr[i + 1] != 0) {
      arr[i] = arr[i + 1];
      i++;
    }
    arr[i] = temp;
  }
  j--;
}

// TIME complexity : O(n2)
// space conplexity : O(1)

// better approach
// ********************

let nonZeroValues = [];
// store all nonzero value in array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    nonZeroValues.push(arr[i]);
  }
}

// replace all value from starting to lenght of nonZerovalues
for (let i = 0; i < nonZeroValues.length; i++) {
  arr[i] = nonZeroValues[i];
}

const totalZeros = arr.length - nonZeroValues.length;
let i = arr.length - totalZeros;

// insert zero at the end with noOfZeroValues
for (let i = arr.length - totalZeros; i < arr.length; i++) {
  arr[i] = 0;
}

// optimised solution
// ********************
var moveZeroes = function (arr) {
  const n = arr.length;
  // find first non zero values;
  let j = 0;
  while (arr[j] != 0 && j < n) {
    j++;
  }

  // loop each value and if value not equal zero swap and increase j by 1
  for (let i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
};

// Q7.Move Zeros to end
//######################

// BRUTE FORCE
//######################Input:

// n = 5, arr1[] = {1, 2, 3, 4, 5}
// m = 5, arr2 [] = {1, 2, 3, 6, 7}

class Solution {
  //Function to return a list containing the union of the two arrays.
  findUnion(arr1, arr2, n, m) {
    //your code here
    const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b); // O(n+mlogn+m)

    let set = new Set();

    for (let i = 0; i < n + m; i++) {
      //  O(n+m)
      if (!set.has(combinedArray[i])) {
        set.add(combinedArray[i]);
      }
    }
    return Array.from(set);
  }
}

// TIME COMPLEXITY =  O(n+m) +  O(nLogn) + O(mlogm)
// SPACE COMPLEXITY =  O(n+m) + O(n+m)(to return the answer)

// Q8.FIND UNION OF TEWO SORTED ARRAY WITH DUCPLICATES
//######################

// BETTER APPROACH

function findUnion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let set = new Set();
  while (i < arr1.length) {
    set.add(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    set.add(arr2[j]);
    j++;
  }

  return Array.from(set);
}

// TIME COMPLEXITY =  O(n+m)
// SPACE COMPLEXITY =  O(n+m)

// OPTIMISED APPROACH

function findUnionOfArrays(arr1, arr2) {
  let j = 0;
  let i = 0;
  let set = new Set();
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      set.add(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      set.add(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    set.add(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    set.add(arr2[j]);
    j++;
  }

  return Array.from(set);
}

// TIME COMPLEXITY =  O(n+m)
// SPACE COMPLEXITY =  O(n+m) + O(n+m)

// Q9.Intersection of two arrays
//######################
// BRUTE FORCE

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

function findIntersection(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        set.add(nums1[i]);
      }
    }
  }
  return Array.from(set);
}

const result = findIntersection(nums1, nums2);

// BETTER APPROACH
var intersection = function (nums1, nums2) {
  let result = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (let value of set1) {
    if (set2.has(value)) {
      result.push(value);
    }
  }
  return result;
};

// TIME COMPLEXITY =  O(n + m) + O(n)
// SPACE COMPLEXITY =  O(n+m) + O(result.length)

// Q10. find missing number in range
//######################

// BRUTE FORCE
// ******************

// LINEAR SEARCH APPROACH
const range = [0, 1, 3];
let flag = 0;
for (let i = 0; i <= range.length; i++) {
  flag = 0;
  // SEARCH EACH VALUE IN ARRAY IF FOUND BREAK
  for (let j = 0; j < range.length; j++) {
    if (range[j] == i) {
      flag = 1;
      break;
    }
  }
  // IF NOT FOUND MATCH FLAG WILL RAMAIN ZERO
  if (flag == 0) {
    console.log(i);
    return i;
  }
}

// TIME COMPLEXITY =  O(nsquare)
// SPACE COMPLEXITY =  O(1)

// BETTER APPROACH
// ******************

// USE MAP OR HASHING

let map = new Map(new Array(range.length));

for (let i = 0; i <= range.length; i++) {
  map.set(i, 0);
}

for (let i = 0; i < range.length; i++) {
  if (map.has(range[i])) {
    map.set(range[i], 1);
  }
}

for (let [key, value] of map) {
  if (value == 0) {
    console.log(key);
    return key;
  }
}

// TIME COMPLEXITY =  O(3n)
// SPACE COMPLEXITY =  O(n)

// BETTER APPROACH
// ******************

// FIND SUMS OF FIRST N NUMBER AND SUM THE NUMBER IN ARRAY
var missingNumber = function (range) {
  let sum = (range.length * (range.length + 1)) / 2;
  let sum2 = 0;
  for (let i = 0; i < range.length; i++) {
    sum2 += range[i];
  }

  return sum - sum2;
};

// TIME COMPLEXITY =  O(n)
// SPACE COMPLEXITY =  O(1)

// Q10.max consecutive ones
//######################

// optimised approach only
var findMaxConsecutiveOnes = function (arr) {
  let count = 0;
  let maxCount = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    } else {
      count = 0;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};

// TIME COMPLEXITY =  O(n)
// SPACE COMPLEXITY =  O(1)

// Q11.Single Number
//######################
// BRUTE FORCE
var singleNumber = function (nums) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = +1; j < arr.length; i++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      return arr[i];
    }
  }
};
// TIME COMPLEXITY =  O(n2)
// SPACE COMPLEXITY =  O(1)

// BETTER APPROACH
// ******************
// use map to make frequecy of each number
var singleNumber = function (nums) {
  let map = new Map();
  nums.forEach((ele) => {
    if (!map.has(ele)) {
      map.set(ele, 1);
    } else {
      map.set(ele, map.get(ele) + 1);
    }
  });

  for (let [key, value] of map.entries()) {
    if (value == 1) {
      return key;
    }
  }
};
// TIME COMPLEXITY =  O(2n)
// SPACE COMPLEXITY =  O(n)

// OPTIMISED
// ******************
// using XOR ie ^ (caret operator in javascript)
var singleNumber = function (nums) {
  let number = 0;
  nums.forEach((ele) => {
    number = number ^ ele;
  });

  return number;
};
// TIME COMPLEXITY =  O(2n)
// SPACE COMPLEXITY =  O(n)

// Q12.Kadane's Algorithm, maximum subarray sum
//######################

// BRUTE FORCE

var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }
  return max;
};

// TIME COMPLEXITY =  O(n2)
// SPACE COMPLEXITY =  O(1)

// OPTIMISED APPROACH  (Kadane's Algorithm, maximum subarray sum)
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = Math.max(sum, max);
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

// Q12.Sort an array of 0's, 1's and 2's
//######################

// BRUTE FORCE
// take three pointer for each 0, 1, 2 count them
// than loop for each value inserting the value in place in given array

// optimised approach (DUTCH NATIONAL FLAG ALGORITHM)
var sortColors = function (arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

// Q12.Sort an array of 0's, 1's and 2's
//######################

// BRUTE FORCE APPROACH
class Solution {
  // Function to find the leaders in the array.
  leaders(n, arr) {
    // code here
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] >= max) {
        result.push(arr[i]);
      }
    }

    return result.reverse();
  }
}
// OPTIMISED APPROACH

var findDuplicate = function (arr) {
  let slow = arr[0];
  let fast = arr[0];

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow != fast);

  fast = arr[0];
  while (slow != fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow;
};

// TIME COMPLEXTIY : O(n)
// SPACE COMPLEXTIY : O(1)

// Q12.Rearrange Array Elements by Sign
//######################

// BRUTE FORCE
var rearrangeArray = function (arr) {
  let n = arr.length;
  let positive = [];
  let negative = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  // remember this multiplication technique
  for (let i = 0; i < n / 2; i++) {
    arr[2 * i] = positive[i];
    arr[2 * i + 1] = negative[i];
  }
  return arr;
};

// TIME COMPLEXTIY : O(2n)
// SPACE COMPLEXTIY : O(n)

// OPTIMISED APPROACH
var rearrangeArray = function (arr) {
  let n = arr.length;

  let ans = Array(arr.length);
  let odd = 0;
  let even = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      ans[2 * even] = arr[i];
      even++;
    } else {
      ans[2 * odd + 1] = arr[i];
      odd++;
    }
  }

  return ans;
};
// TIME COMPLEXTIY : O(n)
// SPACE COMPLEXTIY : O(n)

// Q12.Alternate numbers 2nd variant(of Q12)
// if no of positive and negative are different
const alrtenate = [3, 1, -2, -5, -4, -23, -6, -10, -45, -90, 2, -4, 6, 7, 8];
let n = arr.length;

var rearrangeArray = function (arr) {
  let n = arr.length;
  let positive = [];
  let negative = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  // remember this multiplication technique
  let i = 0;
  let j = 0;

  while (i < positive.length && j < negative.length) {
    ans[2 * i] = positive[i];
    ans[2 * j + 1] = negative[i];
    i++;
    j++;
  }

  while (i < positive.length) {
    ans.push(positive[i]);
    i++;
  }

  while (j < negative.length) {
    ans.push(negative[i]);
    j++;
  }

  return ans;
};

// TIME COMPLEXTIY : O(2n)
// SPACE COMPLEXTIY : O(n)

// Q13. Longest Sub-Array with Sum K


// BRUTE FORCE
class Solution {
  lenOfLongSubarr(arr, n, k) {
    //code here
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      let j = i;
      while (j < arr.length) {
        sum += arr[j];
        if (sum == k) {
          max = Math.max(max, j - i + 1);
        }
        j++;
      }
    }
    return max;
  }
}
// TIME COMPLEXTIY : O(N2)
// SPACE COMPLEXTIY : O(1)

