const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const btnLogo = document.querySelector('.navbar-logo');
const body = document.querySelector('body')
const btnService = document.querySelector('.service-button');
const btnProject = document.querySelector('.project-button');

btnService.addEventListener('click', () => {
    window.location.href = '/Mamello/menu.html';
});

btnProject.addEventListener('click', () => {
    window.location.href = '/Food_Wagen/about.html';
});


btnLogo.addEventListener('click', ()=> {
    navbarEl.classList.toggle('active');
    body.classList.toggle('active');
})