const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

const swiper = new Swiper('.slider-wrapper', {
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});