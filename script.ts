const menuButtons = document.querySelectorAll('[data-sub]');
const closeMenuBtn = document.querySelector('.close-btn') as HTMLElement;
const nav = document.querySelector('nav') as HTMLElement;
const menuToggleBtn: HTMLElement = document.querySelector('.menu-toggle');
const heroImg = document.querySelector('.hero__img');

menuButtons.forEach((button: HTMLLIElement) =>
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

// function changeImageForSize() {
//   // const desktopSize = getComputedStyle(document.body)
//   //   .getPropertyValue('--desktop-width')
//   //   .split('px')[0];
//   const heroImage: HTMLImageElement = document.querySelector('.hero__img');
//   heroImage.src =
//     window.innerWidth >= 700
//       ? './images/image-hero-desktop.png'
//       : (heroImage.src = './images/image-hero-mobile.png');
// }

// window.onresize = changeImageForSize;
