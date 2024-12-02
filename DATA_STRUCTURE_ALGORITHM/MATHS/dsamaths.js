// COUNT DIGITS IN NUMBER

function noOfDigits(N) {
  let count = 0;
  while (N > 0) {
    const lastDigit = N % 10;
    count++;
    N = Math.trunc(N / 10);
  }

  return 'Total Digits:' + count;
}

// COUNT DIGITS IN NUMBER

function noOfDigits(N) {
  let revNumber = 0;

  while (N > 0) {
    const lastDigit = N % 10;
    N = Math.trunc(N / 10);
    revNumber = revNumber * 10 + lastDigit;
  }

  return revNumber;
}

// CHECK PALINDROM

let x = 1223564221;

var isPalindrome = function (x) {
  let originalNo = x;
  let reverseNo = 0;
  while (originalNo > 0) {
    const lastDigit = originalNo % 10;

    originalNo = Math.trunc(originalNo / 10);

    reverseNo = reverseNo * 10 + lastDigit;
  }

  if (reverseNo === x) {
    return true;
  } else {
    return false;
  }
};

// ARMSTRONG NUMBER

let no = 371;

var isPalindrome = function (x) {
  let sum = 0;
  let originalNo = x;
  while (originalNo > 0) {
    const lastDigit = originalNo % 10;

    sum += lastDigit * lastDigit * lastDigit;
    originalNo = Math.trunc(originalNo / 10);
  }
  if (sum === x) {
    return true;
  } else {
    return false;
  }
};

// PRINT ALL DEVISOR

let digit = 36;

function findAllDevisors(digit) {
  let count = 0;
  for (let i = 1; i <= digit; i++) {
    if (digit % i === 0) {
      count++;
    }
  }
  return count;
}

// Time Complexity: O(n)

// optimised

function findAllDevisorsOptimised(digit) {
  let devisors = [];
  for (let i = 1; i * i <= digit; i++) {
    if (digit % i === 0) {
      devisors.push(i);
      if (digit / i !== i) {
        devisors.push(digit / i);
      }
    }
  }
  devisors.sort((a, b) => a - b);
  return devisors;
}

// CHECK FOR PRIME

function checkForPrimes(digit) {
  for (let i = 1; i <= digit; i++) {
    const noOfDevisors = findAllDevisors(i);
    if (noOfDevisors <= 2) {
      console.log(i);
    }
  }
}

// ************* GDC/HCF ***************

// Euclidean Algorithm

// gcd(greaterNo, smallerNo) = gcd(greaterNo - smallerNo, smallerNo)
// substract until any no from greaterNo or smallerNo becomes zero and the non-zero no will be the GDC

// or
// gcd(greaterNo, smallerNo) = gcd(greaterNo % smallerNo, smallerNo)

// function findGCD(a, b) {
//   if (a > b) {
//     a = a % b;
//   } else {
//     b = b % a;
//   }

//   if (a === 0) return b;
//   return a;
// }

// console.log(findGCD(128, 90));

//**************** */ LCM And GCD ****************

//  a * b = LCM(a, b) * HCF(a,b)
// a and b are numbers

// class Solution{
//   lcmAndGcd(a, b){
//       //code here
//       let gcd = 1
//       let n1 = a;
//       let n2 = b;
//       // euclid theorem
//       // euclidean algorithm for gcd
// while(n1 > 0 && n2 > 0 ){
//    if(n1 > n2){
//        n1 = n1 - n2
//    } else {
//        n2 = n2 - n1
//    }
//    if(n1 === 0) gcd = n2
//    if(n2 === 0) gcd = n1
// }

// let lcm = (a * b)/gcd

// return [lcm, gcd]
//   }
// }
