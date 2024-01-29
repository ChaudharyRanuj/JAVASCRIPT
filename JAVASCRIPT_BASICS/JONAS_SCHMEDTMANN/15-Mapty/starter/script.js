'use strict';

// prettier-ignore

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  _setDescription () {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.name[0].toUpperCase()}${this.name.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

}

class Running extends Workout {
  name = 'running';
  constructor(coords, distance, duration, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this._setDescription();
    this._calcPace();
  }
  _calcPace() {
    // min/km

    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

class Cycling extends Workout {
  name = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this._setDescription();
    this._calcSpeed();
  }
  _calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// APPLICATION ARCHITECHTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._movetoPopup.bind(this));
  }

  _getPosition() {
    // GET CURRENT LOCATION
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        timeout: 8000,
        maximumAge: 0,
      }
    );
  }

  _loadMap(pos) {
    const { latitude, longitude } = pos.coords;
    this.#map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap./copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    // RENDERING FORM
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty form input field before each submit
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
    // HIDE FORM AFTER SUBMIT
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const type = inputType.value;
    const validInput = (...input) => input.every(inp => Number.isFinite(inp));
    const allPositive = (...input) => input.every(inp => inp > 0);
    e.preventDefault();
    // INPUT VALIDATION FUNCTION

    // Get data from form
    const distance = inputDistance.value;
    const duration = inputDuration.value;
    const cadence = inputCadence.value;
    const elevationGain = inputElevation.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // Create running object if type running
    if (type === 'running') {
      if (
        !validInput(distance, duration, cadence) &&
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Input number should be a positive number.');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // Create cycling object if type cycling
    if (type === 'cycling') {
      if (
        !validInput(distance, duration, elevationGain) &&
        !allPositive(distance, duration)
      ) {
        return alert('Input number should be a positive number.');
      }
      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }
    // Insert object in workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Rendering workout on leftsidebar
    let html = `
    <li class="workout workout--${workout.name}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.name[0].toUpperCase()}${workout.name.slice(
      1
    )} on  ${(workout.date + '').slice(4, 10)}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.name === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.name === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

    if (workout.name === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;
    form.insertAdjacentHTML('afterend', html);

    // SHOW MARKER AFTER SUBMIT EVENT
    this._renderMarker(workout);

    this._hideForm();
  }

  _renderMarker(workout) {
    // SHOW MARKER AFTER SUBMIT EVENT

    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.name}-popup`,
        })
      )
      .setPopupContent(`${workout.description}`)
      .openPopup();
  }

  _movetoPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  // CLASS ENDS
}

const newApp = new App();
