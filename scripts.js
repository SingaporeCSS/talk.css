"use strict";

var slideCount = document.querySelectorAll('section').length;
document.body.addEventListener('keydown', controls, false);

function controls(event) {
  var isCover = window.location.hash === '' || window.location.hash === '#start';

  if (isCover) {
    start(event);
  } else {
    navigate(event);
  }
}

function start(event) {
  if (event.code === 'Space' || event.code === 'ArrowRight') {
    window.location.hash = '#slide1';
  }
}

function navigate(event) {
  var isFirstSlide = window.location.hash === '#slide1';
  var isLastSlide = window.location.hash === '#slide' + (slideCount - 1);
  var activeSlide = document.querySelector('[id^="slide"]:target');
  var slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

  if (activeSlide && !isLastSlide && (event.code === 'Space' || event.code === 'ArrowRight')) {
    window.location.hash = 'slide' + (slideNum + 1);
  }

  if (!isFirstSlide && event.code === 'ArrowLeft') {
    window.location.hash = 'slide' + (slideNum - 1);
  }

  if (isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start';
  }
}

(function () {
  var chrisHeads = document.getElementsByClassName('jsChris');
  var nonsense = document.getElementById('nonsense');
  var lastActiveHead = null;

  function headAppear() {
    nonsense.style.setProperty('--tx', Math.floor(Math.random() * 100) + 0 + 'vw');
    nonsense.style.setProperty('--ty', Math.floor(Math.random() * 100) + 0 + 'vh');
    if (lastActiveHead) lastActiveHead.classList.toggle('active');
    var random = Math.floor(Math.random() * (chrisHeads.length - 1)) + 0;
    var randomHead = chrisHeads[random];
    randomHead.classList.toggle('active');
    lastActiveHead = randomHead;
    setTimeout(headAppear, 5000);
  }

  headAppear();
})();