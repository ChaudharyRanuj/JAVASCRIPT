const insert = document.querySelector('.insert')
window.addEventListener("keydown", (e) => {
console.log(e);
 insert.innerHTML = ` <div class="key">
 ${e.key}
 <small>event.key</small>
</div>
<div class="key">
${e.keyCode}
 <small>event.keycode</small>
</div>
<div class="key">${e.code}<small>event.code</small></div>

<div class="key">Press any key to get the keycode and code.</div>

`



});
