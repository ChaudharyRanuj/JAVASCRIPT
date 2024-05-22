let roman = "DCCLXXXIX";
let n = roman.length
let symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let ans = 0
for(let i = 0 ; i< n - 1; i++) {
    if(symbols[roman[i]] >= symbols[roman[i+1]]) {
        ans += symbols[roman[i]]
    } else {
        ans -= symbols[roman[i]]
    }
}

if(roman.length > 1) {
    ans += symbols[roman[n - 1]]
}

