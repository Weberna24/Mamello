const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const btnLogo = document.querySelector('.navbar-logo');
const body = document.querySelector('body')
const btnService = document.querySelector('.service-button');
const btnProject = document.querySelector('.project-button');

var swiper = new Swiper("#service-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
      el: "swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    }
  });

btnService.addEventListener('click', () => {
    window.location.href = '/Mamello/menu.html';
});



btnLogo.addEventListener('click', ()=> {
    navbarEl.classList.toggle('active');
    body.classList.toggle('active');
})

