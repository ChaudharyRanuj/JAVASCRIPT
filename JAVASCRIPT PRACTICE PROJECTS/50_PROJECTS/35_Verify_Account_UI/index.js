const inputs = document.querySelectorAll(".code");

inputs.forEach((input, idx) => {
  input.addEventListener("keydown", (e) => {
    e.target.value = "";

    if (e.key >= 0 && e.key <= 9) {
      if (idx < inputs.length - 1) {
        setTimeout(() => {
          inputs[idx + 1].focus();
        }, 10);
      }
    } else if (e.key === "Backspace") {
      inputs[idx - 1].focus();
    }
  });
});
