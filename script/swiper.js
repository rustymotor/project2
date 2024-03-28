
const swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:{delay:3000},
    
    pagination: {
    el: ".swiper-pagination",},

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
});
