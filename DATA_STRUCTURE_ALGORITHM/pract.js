let str = "(())))(";

if(str.length < 3) {
  return str.length;
}

for(let i = 1; i < str.length - 1; i++) {

let k = i - 1

let openCount = 0
while( k >= 0) {
if(str[k] == '(') {
  openCount++
}
k--
}
let j  = i + 1
let closeCount = 0

while( j < str.length) {
  if(str[j] == ')') {
    closeCount++
  }
 j++
  }
 if(openCount == closeCount) {
  return i + 1
 }
}

