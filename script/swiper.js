
const swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:{delay:5000},
    
    pagination: {
    el: ".swiper-pagination",},

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
});
