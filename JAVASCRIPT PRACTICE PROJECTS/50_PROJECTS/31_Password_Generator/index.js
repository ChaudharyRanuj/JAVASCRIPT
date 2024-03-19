const result = document.getElementById("result");
const clipboardBtn = document.querySelector(".clipboard-btn");
const number = document.getElementById("number");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const generatePassBtn = document.getElementById("password-btn");
const passwordLength = document.getElementById("password-length");

clipboardBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = result.value.trim();
  if(password === '') return;
    textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove()
});

generatePassBtn.addEventListener("click", () => {
  const passLength = +passwordLength.value;
  const hasLowercase = lowercase.checked;
  const hasNumber = number.checked;
  const hasUppercase = uppercase.checked;
  const hasSymbols = symbols.checked;

  result.value = generatePassword(
    hasLowercase,
    hasNumber,
    hasUppercase,
    hasSymbols,
    passLength
  );
});

function generateLowerCase(lower, number, uppercase, symbols, passLength) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function generateUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 47);
}

function generateSymbols() {
  let symbols = "!@#$%^&*()_-{[}]|<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  lowercase: generateLowerCase,
  uppercase: generateUppercase,
  number: generateNumber,
  symbols: generateSymbols,
};

function generatePassword(lowercase, number, uppercase, symbols, passLength) {
  // number of checked checkboxes
  const length = lowercase + number + uppercase + symbols;

  if (length === 0) return "";

  const checkBoxTrueValues = [
    { lowercase },
    { number },
    { uppercase },
    { symbols },
  ].filter((ele) => Object.values(ele)[0]);
  let generatedPass = "";

  const elements = checkBoxTrueValues.map((ele) => Object.keys(ele)[0]);

  for (let j = 0; j < passLength; j++) {
    for (let i = 0; i < length; i++) {
      generatedPass += randomFunc[elements[i]]();
    }
    if (generatedPass.length === passLength) break;
  }

  const finalPassword = generatedPass.slice(0, passLength);
  return finalPassword;
}
