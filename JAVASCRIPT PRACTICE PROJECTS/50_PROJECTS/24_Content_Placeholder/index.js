const card = document.querySelector('.card')


setTimeout(()=> {
card.innerHTML = ''
const html = `  <div class="card-header animated-bg animated-text">
<img src="pc.png" alt="" />
</div>
<div class="card-content">
<h3 class="card-title animate-bg animated-bg-text" id="title">
  Lorem ipsum dolor sit amet.
</h3>
<p class="card-excerpt" id="excerpt">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
  ullam!
  <span class="animated-bg animated-bg-text">&nbsp</span>
  <span class="animated-bg animated-bg-text">&nbsp</span>
  <span class="animated-bg animated-bg-text">&nbsp</span>
</p>
<div class="author">
  <div class="profile_img animated-bg" id="profile_img">
    <img src="photo.jpg" alt="" />
  </div>
  <div class="author-info ">
    <strong class="animated-bg animated-bg-text">
      Ranuj Chaudhary
    </strong>
    <small class="animated-bg animated-bg-text" id="name"
      >May 01, 2050</small
    >
  </div>
</div>
</div>`
card.innerHTML = html;
}, 2000)


