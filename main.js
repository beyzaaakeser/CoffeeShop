// Swiper
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Menu Open Close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('move');
  navbar.classList.toggle("open-menu")
});

// Close Menu 

window.onscroll = () => {
  menu.classList.remove('move');
  navbar.classList.remove("open-menu")
};

// Scrollreveal Animation
const animate = ScrollReveal({
  origin:"top",
  distance:"70px",
  duration:"2500",
  delay:" 400",

})

animate.reveal(".navbar")
animate.reveal(".home-text",{origin:"left"})
animate.reveal(".home-img",{origin:"bottom"})
animate.reveal(".ser-box,.team-box,.product-box,.book-data",{interval:100,})