// 1) Count Occurrences of Anagrams
// Note: Array is sorted
// let txt = "forxxorfxdofr",
//   pat = "for";
// let count = 0;
// let k = pat.length;
// let map = new Map();

// // mapping all the pattern charactor
// for (let i = 0; i < k; i++) {
//   let char = pat[i];
//   if (!map.has(char)) {
//     map.set(pat[i], 1);
//   } else {
//     map.set(pat[i], map.get(pat[i]) + 1);
//   }
// }

// mapping all the pattern charactor
// for (let i = 0; i < k; i++) {
//   if (map.has(txt[i])) {
//     map.set(txt[i], map.get(txt[i]) - 1);
//   }
// }

// if (checkMapEmpty(map)) {
//   count++;
// }

// for (let i = k; i < txt.length; i++) {
//   if (map.has(txt[i - k])) {
//     map.set(txt[i - k], map.get(txt[i - k]) + 1);
//   }
//   if (map.has(txt[i])) {
//     map.set(txt[i], map.get(txt[i]) - 1);
//   }
//   if (checkMapEmpty(map)) {
//     count++;
//   }
//   console.log(count);
//   console.log(map);
// }

// function checkMapEmpty(map) {
//   for (let [key, value] of map) {
//     if (value != 0) return false;
//   }
//   return true;
// }
/*
TIME COMPLEXITY:
SPACE COMPLEXITY:
*/

// 2)Find All Anagrams in a String
/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word
or phrase, typically using all the original letters exactly once.

*/
let str = "abab";
let pat = "ab";
function checkMapEmpty(map) {
  for (let [key, value] of map) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}

var findAnagrams = function (str, anagram) {
  let map = new Map();
  let res = [];
  let anagramLength = anagram.length;

  //frequecy for pattern character to match
  for (let i = 0; i < anagramLength; i++) {
    if (!map.has(pat[i])) {
      map.set(pat[i], 1);
    } else {
      map.set(pat[i], map.get(pat[i]) + 1);
    }
  }
  console.log(map);
  // loop str till first window size
  for (let i = 0; i < anagramLength; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) - 1);
    }
  }
  console.log(map);
  
  if (checkMapEmpty(map)) {
    res.push(0);
  }
  
  // now shift window watch time after first window
  for (let i = anagramLength; i < str.length; i++) {
    if (map.has(str[i - anagramLength])) {
      map.set(str[i - anagramLength], map.get(str[i - anagramLength]) + 1);
    }
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) - 1);
    }
    if (checkMapEmpty(map)) {
      res.push(i - anagramLength + 1);
    }
  }

  return res;
};

console.log(findAnagrams(str, pat));
