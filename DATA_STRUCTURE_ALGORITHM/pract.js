let s = "010"
let zeroStr = ''
let oneStr = ''
for (let i = 0; i < s.length; i++) {
    if (s[i] === 0) {
        zeroStr += s[i]
    }
    
    if (s[i] === 1){
        oneStr +=  s[i]
    }
console.log(zeroStr);
}

//   if(oneStr.length == 1) {
//     return  zeroStr + oneStr[0];
//   } else {
//  return oneStr.slice(1) + zeroStr + oneStr[0]
//    } 