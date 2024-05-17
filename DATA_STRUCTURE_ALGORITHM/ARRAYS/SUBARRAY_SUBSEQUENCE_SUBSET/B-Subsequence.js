
// BY RECURSION

let input = "abc";
const powerSet = [];
let output = "";
function subsequece(input, output) {
  if (input.length === 0) {
    powerSet.push(output);
    return;
  }
  subsequece(input.substring(1), output + input[0]);
  subsequece(input.substring(1), output);
}
