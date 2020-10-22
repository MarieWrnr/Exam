'use strict';

window.addEventListener('scroll', handleFixedHeader);

function handleFixedHeader() {
  const $header = document.querySelector('header');
  const { scrollY } = window;
  const fixedPos = 100;

  if (scrollY > fixedPos) {
    $header.classList.add('is-fixed');
  } else {
    $header.classList.remove('is-fixed');
  }
}