const menuButtons = document.querySelectorAll('[data-sub]');
const closeMenuBtn = document.querySelector('.close-btn');
const nav = document.querySelector('nav');
const menuToggleBtn = document.querySelector('.menu-toggle');

menuButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    button.classList.toggle('expanded');
    toggleArrow(e.target);
  })
);

closeMenuBtn.addEventListener('click', (e) => {
  nav.classList.remove('open');
});

menuToggleBtn.addEventListener('click', (e) => {
  nav.classList.add('open');
});

function toggleArrow(el) {
  if (el.childNodes[1].src.includes('up')) {
    el.childNodes[1].src = './images/icon-arrow-down.svg';
  } else {
    el.childNodes[1].src = './images/icon-arrow-up.svg';
  }
}
