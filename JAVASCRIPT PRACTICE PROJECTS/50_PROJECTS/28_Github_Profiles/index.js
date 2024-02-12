const inputEle = document.getElementById("search-query");
const btn = document.querySelector(".search-btn");
const output = document.querySelector(".output");
inputEle.focus();
const url = "https://api.github.com/users/";

async function fetchuserProfile(username) {
  try {
    const res = await fetch(`${url}${username}`);
    if (!res.ok) {
      throw Error("Problem fetching the user data..");
    }
    const data = await res.json();
    console.log(data);
    profileCardHtml(data);
    // profileCard(data);
  } catch (err) {
    printError(err);
  }
}

function printError(errMsg) {
  output.innerHTML = "";
  const displayError = document.createElement("p");
  displayError.innerText = errMsg;
  output.appendChild(displayError);
}

function profileCardHtml(data) {
  output.innerHTML = ""
  const profileCard = `
  <div class="image">
    <img src="${data.avatar_url}" alt="" />
  </div>
  <div class="profile-data">
    <h2>${data.login}</h2>
    <p>
      About: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Tempora, iure?
    </p>
    <div class="repos">
      <span>Followers:${data.followers}  </span>
      <span>Following: ${data.following} </span>
      <span>Repos:${data.public_repos}  </span>
    </div>
  </div>
 `;
  const profileCardContainer = document.createElement("div");
  profileCardContainer.classList.add("profile-card");
  profileCardContainer.innerHTML = profileCard;
  output.appendChild(profileCardContainer);
}

btn.addEventListener("click", () => {
  fetchuserProfile(inputEle.value);
});
