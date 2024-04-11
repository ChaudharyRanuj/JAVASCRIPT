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
var findAnagrams = function (str, pat) {
  let map = new Map();
  let res = [];
  let patternLength = pat.length;

  //frequecy for pattern character to match
  for (let i = 0; i < patternLength; i++) {
    if (!map.has(pat[i])) {
      map.set(pat[i], 1);
    } else {
      map.set(pat[i], map.get(pat[i]) + 1);
    }
  }
  console.log(map);
  // loop str till first window size
  for (let i = 0; i < patternLength; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) - 1);
    }
  }
  console.log(map);
  
  if (checkMapEmpty(map)) {
    res.push(0);
  }
  
  // now shift window wach time after first window
  for (let i = patternLength; i < str.length; i++) {
    if (map.has(str[i - patternLength])) {
      map.set(str[i - patternLength], map.get(str[i - patternLength]) + 1);
    }
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) - 1);
    }
    if (checkMapEmpty(map)) {
      res.push(i - patternLength + 1);
    }
  }

  return res;
};

console.log(findAnagrams(str, pat));
