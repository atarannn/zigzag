const swiper = new Swiper('.location-swiper-mobile', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  lazy: true,
  speed: 1000,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
