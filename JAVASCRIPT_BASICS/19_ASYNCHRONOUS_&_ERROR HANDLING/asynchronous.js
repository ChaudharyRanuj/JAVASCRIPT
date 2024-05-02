"use strict";
/*
WHAT IS ASYNCHRONOUS?
Coordinating behaviour of a program over a period of time.

Note: 
1. Asynchronous code is executed after a task that runs in the 'backgorund' finishes.
2. Asynchronous code is non-blocking.
3. Excution doesn't wait for an asynchronous task to finish its work.
4. Callback functions alone do not make code asynchronous.

Examples: 
1. IMAGE LOADING IN BACKGROUND
*/
// const img = document.querySelector(".image");
// img.src = "thailand_image.webp";
// img.addEventListener("load", function () {
//   img.style.opacity = 1;
// });
// color changes before the image loading
// document.body.style.background = "#FFFFED";

// WHAT IS AJAX (ANSYNCHRONOUS JAVASCRIPT AND XML)?
/*
Asynchronous Javascript and XML: Allows us to communicate with remote web servers in an asynchronous way. with AJAX calls, we can request data from the web servers dynamically.

              request (GET/POST/PUT/PATCH /DELETE ETC.)
Client ----------------------> Web Server (Usally a web API) 
Client <---------------------- Web Server 
              response 

WHAT IS API?

Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

TYPES OF API
1. DOM API
2. GEOLOCATION API
3. OWN CLASS API
.
.
. and millions possibilities

Note: We can build our own APIs (requires back-end development, e.g with node.js) or use 
3rd-party APIs.

It's not a big deal, it's really just one small change. Instead of:

https://restcountries.eu/rest/v2/

It's now:

https://countries-api-836d.onrender.com/countries/


*/
/*
GITHUB API LIST 
https://github.com/public-api-lists/public-api-lists?tab=readme-ov-file

Sports & Fitness > CITY BIKES
https://api.citybik.es/v2/

CityBikes API Documentation

API End points
http://api.citybik.es/v2/networks

*/
// AJAX CALLS
const request = new XMLHttpRequest();
request.open("GET", "http://api.citybik.es/v2/networks");
request.send();
request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  renderdata(data);
});

function renderdata(data) {
  const mybike = data.networks;
  const dataTable = document.querySelector(".data-table");

  let html = ``;
  for (let i = 0; i < 5; i++) {
    let str = `<tr>
<td>${mybike[i].company}</td>
<td>${mybike[i].name}</td>
<td>${mybike[i].location.city}</td>
<td>${mybike[i].location.country}</td>
</tr>`;
    html = html + str;
  }
  dataTable.insertAdjacentHTML("beforeend", html);
}

// PROMESIS

// SEND REQUEST WITH FETCH fetch(url, options object)

// PROMISE CHAINING fetch().then((fullfilled Callback), (rejected callback)).then().then()

// ERROR HANDLING IN PROMISES then((response) => {return response.json()}, (err)  => console.log(err)
// Note:
// 1. if error not handled with call back than uncaught error show in console.
// 2. if error not handled in any rejected callback then error propogate to bottom.
// 3. use console.error() to show error two know the error generation location.
const requestPromise = function () {
  fetch("http://api.citybik.es/v2/networks")
    .then((response) => {
      console.log(response);
      // MANUAL ERROR HANDLING
      if (!response.ok) {
        throw new Error("Data not found: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      renderPromises(data);
    })
    .catch((err) => {
      // HANDLING THE REJECTED PROMISES
      const element = document.createElement("p");
      const dataTablePromise = document.querySelector(".promises-data-table");
      element.innerText = err;
      dataTablePromise.insertAdjacentElement("beforeend", element);
    });
};
// requestPromise()

function renderPromises(data) {
  const myBikePromise = data.networks;
  const dataTablePromise = document.querySelector(".promises-data-table");
  let htmlNew = ``;
  for (let i = 0; i < 5; i++) {
    let str = `<tr>
<td>${myBikePromise[i].company}</td>
<td>${myBikePromise[i].name}</td>
<td>${myBikePromise[i].location.city}</td>
<td>${myBikePromise[i].location.country}</td>
</tr>`;
    htmlNew = htmlNew + str;
  }
  dataTablePromise.insertAdjacentHTML("beforeend", htmlNew);
}
const btn = document.querySelector(".btn");

// EVENT LOOP

// GLOBAL EXECUTION >> MICROTASK QUEUE >> CALLBACK QUEUE
// console.log("START EXECUTION GLOBAL");
// setTimeout(() => console.log("CALLBACK QUEUE"), 0);
// Promise.resolve("MICROTASK QUEUE").then((res) => console.log(res));
// console.log("END EXECUTION GLOBAL");

// BUILDING PROMISES
// new Promise(Executer function)
// function executer(resolve, reject) { resolve(); reject(); }
/* 

How To Create Your Own Implementation Of JavaScript Promises  :-

https://www.youtube.com/watch?v=1l4wHWQCCIc&t=320s



console.log("*************** BUILDING PROMISES ***************");
const passFailed = new Promise((resolve, reject) => {
  // ENCAPSULATION OF ASYNCHRONOUS BEHAVIOUR TO PROMISE

  // BEHAVIOUR
  setTimeout(() => {
    let number = Math.random() * 100;
    if (number >= 50) {
      resolve("PASSED: Marks = " + Math.floor(number));
    } else {
      reject(`FAILED:  Marks = ${Math.floor(number)}`);
    }
  }, 0);
});
passFailed.then((res) => console.log(res)).catch((err) => console.error(err));
*/

// PROMISIFYING SETTIMEOUT
// CONVERT CALLBACK BASED ASYNCHRONOUS BEHAVIOUR TO PROMISE BASED ASYNCHRONOUS BEHAVIOUR
/* 
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// WITH PROMISE CHAINING USING THEN METHOD
wait(1)
  .then(() => {
    console.log("1 SEC PASSED");
    return wait(1);
  })
  .then(() => {
    console.log("2 SEC PASSED");
    return wait(1);
  })
  .then(() => {
    console.log("3 SEC PASSED");
    return wait(1);
  })
  .then(() => {
    console.log("4 SEC PASSED");
    return wait(1);
  })
  .catch((err) => console.log(err));
*/

// USING ASYNC AWAIT
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, seconds * 1000);
//   });
// };
// wait().then(() => console.log('value is resolved'))

// const doChainingTask = async function () {
//   try {
//     const task = await wait(1);
//     const task2 = await wait(1);
//     const task3 = await wait(1);
//     const task4 = await wait(1);
//     const task5 = await wait(1);
//     const task6 = await wait(1);
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// doChainingTask();

// PROMISIFYING GEOLOCATION
// const geolocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// geolocation()
//   .then((pos) => console.log(pos))
//   .catch((err) => console.error(err.message));

// CONSUMING PROMISES WITH ASYNC AND AWAIT
// const geolocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const getMyLocation = async function () {
//   try {
//     const pos = await geolocation();
//     console.log(pos);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// getMyLocation();
// const imageBox = document.querySelector(".image-box");
// fetch("https://picsum.photos/v2/list?page=1&limit=2000")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     const [image] = res;
//      let html = ``;
//     for (let i = 200; i < res.length; i = i + 5) {
//       html =
//         html + `<img src="https://picsum.photos/id/${i}/300/300" alt=""></img>`;
//     }
//     imageBox.insertAdjacentHTML("beforeend", html);
//   })
//   .catch((err) => {
//     console.log(err)
//     const para = document.createElement('p')
//     para.innerText = `Enable to load the images : Error (${err.message})`
//     imageBox.insertAdjacentElement("beforeend", para)
//   }

//    );
async function showImages() {
  const imageBox = document.querySelector(".image-box");
  try {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=45");
    const imageData = await res.json();

    let html = ``;
    for (let i = 0; i < imageData.length; i = i + 5) {
      let url = imageData[i].download_url;
      html =
        html +
        `<img src="${url.slice(0, url.length - 9)}300/300" alt=""></img>`;
    }

    imageBox.insertAdjacentHTML("beforeend", html);
    // RETURING VALUE FROM THE ASYNC FUNCTION
    return `Image sucessfully rendered on page`;
  } catch (err) {
    const para = document.createElement("p");
    para.innerText = `Enable to load the images : Error (${err.message})`;
    imageBox.insertAdjacentElement("beforeend", para);
    throw new Error(`${err.message}`);
  }
}
// TO AVOID THIS CHAINING AND USE OF THEN METHOD USE IIFE
// showImages().then(res => console.log(res)).catch(err=> console.log(err))

// IIFE FUNCTION
(async function () {
  try {
    const res = await showImages();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
})();

// RUNNING PROMISES IN PARALLEL
const dataParallel = async function () {
  try {
    const newPromise = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=45"
    );
    const imageData = await newPromise.json();

    const newPromiseTwo = new Promise((resolve) => {
      setTimeout(resolve, 2000, "ranuj");
    });
    const newPromiseOne = Promise.resolve("2");

    Promise.all([imageData, newPromiseOne, newPromiseTwo]).then((values) =>
      console.log(values)
    );
  } catch (error) {
    console.error(error);
  }
};
dataParallel();
