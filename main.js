const intro_button = document.querySelector('.intro-button');
const intro = document.querySelector('.intro');
const home_button = document.querySelector('.home-button');
const home = document.querySelector('.home');
const app_bottom = document.querySelector('.app-bottom');

intro_button.addEventListener('click', () => {
    intro.classList.remove('active');
    home.classList.add('active');
    app_bottom.classList.add('active');
})

home_button.addEventListener('click', () => {
    app_bottom.classList.remove('active');
    home.classList.remove('active')
    intro.classList.add('active');
})

