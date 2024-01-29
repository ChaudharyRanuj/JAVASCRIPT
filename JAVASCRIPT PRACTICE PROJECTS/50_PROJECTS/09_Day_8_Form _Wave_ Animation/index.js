const label = document.querySelectorAll('label')
label.forEach(label => {
  label.innerHTML = label.innerText.split('').map((ele, idx) => `<span style = "transition-delay : ${50 * idx}ms">${ele}</span>`).join('')
})