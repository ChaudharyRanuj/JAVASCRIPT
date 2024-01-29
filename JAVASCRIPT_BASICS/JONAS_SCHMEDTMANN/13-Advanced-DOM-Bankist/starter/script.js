'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

/////////////////////////////////////////////////
//  EVENT HANDLERS

// SMOOTH SCROLL FUNCTIONALITY
btnScrollTo.addEventListener('click', function (e) {
  const sectionCorrd = sectionOne.getBoundingClientRect();
  console.log(sectionCorrd);
  // 1ST METHOD
  // window.scrollTo({
  //   left: sectionCorrd.left + window.scrollX,
  //   top: sectionCorrd.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  // 2ND METHOD
  sectionOne.scrollIntoView({ behavior: 'smooth' });
  console.log(sectionOne.scrollIntoView({ behavior: 'smooth' }));
});

// NAV LINKS SCROLL FUNCTIONALITY
// USING EVENT DELEGATION
nav.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const navLink = document.querySelector(id);
    navLink.scrollIntoView({ behavior: 'smooth' });
  }
 
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
