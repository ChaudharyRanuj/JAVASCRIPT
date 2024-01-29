'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountries = function (data, className = '') {
  const html = `<article class="country ${className}" >
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>POP ${data.population}</p>
      <p class="country__row"><span>🗣️</span>LANG ${data.languages.por}</p>
      <p class="country__row"><span>💰</span>CUR ${data.currencies.EUR.symbol} </p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getJson = function (url) {
  return fetch(url).then(response => {
     if (response.ok === false) {
      throw new Error(`💥 Country Not found (${response.status}) 💥`);
    }
    return response.json();
  });
};

const getLocation = function (lat, long) {
  getJson(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=323057501147972495231x125024`
  )
    .then(data => {
      renderCountries(data);
      return getJson(
        `https://geocode.xyz/${lat},${long}?geoit=json&auth=323057501147972495231x125024`
      );
    })
    .then(data => {
      console.log(data);
      renderCountries(data, 'neighbour');
    })
    .catch(err => {
      console.error(err);
      console.error(err.message);
      countriesContainer.insertAdjacentText('beforeend', err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getLocation(52.508, 13.381);
// getLocation(19.037, 72.873);
// getLocation(-33.933, 18.474);
