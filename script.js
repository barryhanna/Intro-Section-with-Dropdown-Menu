var menuButtons = Array.from(document.querySelectorAll('[data-sub]'));
var closeMenuBtn = document.querySelector('.close-btn');
var nav = document.querySelector('nav');
var menuToggleBtn = document.querySelector('.menu-toggle');
var heroImg = document.querySelector('.hero__img');
menuButtons.forEach(function (button) {
    return button.addEventListener('click', function (e) {
        clearExpandedButtons(menuButtons);
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
function clearExpandedButtons(buttons) {
    buttons.forEach(function (button) { return button.classList.remove('expanded'); });
}
