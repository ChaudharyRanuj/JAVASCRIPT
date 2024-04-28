const testimonialText = document.querySelector(".testimonial-text");
const person = document.querySelector(".name");
const image = document.querySelector(".testimonial-image");
const testimonialData = [
  {
    text: `Nice products fullfilled all my designing needs.`,
  },
  {
    text: `Best tool for image editing.`,
  },
  {
    text: `Amazing tool for graphic designers,
  eaque `,
  },
];

async function fetchAvatar() {
  const res = await fetch("https://randomuser.me/api/?results=3");
  const avatars = await res.json();
  const newData = await avatars.results;
  const data = avatars.results.map((ele) => {
    let obj = {
      userName: ele.name.title + " " + ele.name.first + " " + ele.name.last,
      url: ele.picture.large,
    };
    return obj;
  });
  console.log(data);
  image.src = data[0].url;
  runTimer(testimonialData, data);
}
fetchAvatar();

function runTimer(textData, userData) {
  let count = 0;
  setInterval(() => {
    count++;
    if (count === textData.length) {
      count = 0;
    }
    const { userName, url } = userData[count];
    const { text } = textData[count];
    person.innerText = userName;
    testimonialText.innerText = text;
    image.src = url;
  }, 5000);
}
