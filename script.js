var menuButtons = document.querySelectorAll('[data-sub]');
var closeMenuBtn = document.querySelector('.close-btn');
var nav = document.querySelector('nav');
var menuToggleBtn = document.querySelector('.menu-toggle');
var heroImg = document.querySelector('.hero__img');
menuButtons.forEach(function (button) {
    return button.addEventListener('click', function (e) {
        button.classList.toggle('expanded');
        toggleArrow(e.target);
    });
});
closeMenuBtn.addEventListener('click', function (e) {
    nav.classList.remove('open');
});
menuToggleBtn.addEventListener('click', function (e) {
    nav.classList.add('open');
});
function toggleArrow(el) {
    var target = el;
    var imageElement = target.childNodes[1];
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
