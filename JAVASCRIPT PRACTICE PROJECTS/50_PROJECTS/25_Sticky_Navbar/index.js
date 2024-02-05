const header = document.querySelector("header");
document.onscroll = (event) => {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    header.classList.add("on-scroll");
  }

  if (window.scrollY < 200) {
    header.classList.remove("on-scroll");
  }
};
