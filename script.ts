const menuButtons = document.querySelectorAll('[data-sub]');
const closeMenuBtn = document.querySelector('.close-btn');
const nav = document.querySelector('nav');
const menuToggleBtn: HTMLElement = document.querySelector('.menu-toggle');

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

function toggleArrow(el: EventTarget): void {
  const target = el as HTMLAnchorElement;
  const imageElement = target.childNodes[1] as HTMLImageElement;
  imageElement.src = imageElement.src.includes('up')
    ? './images/icon-arrow-down.svg'
    : './images/icon-arrow-up.svg';
}
