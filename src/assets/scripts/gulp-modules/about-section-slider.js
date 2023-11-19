const slider1 = new Swiper('.about-section-1-swiper', {
  loop: false,
  slidesPerView: 1.1,
  spaceBetween: 20,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-1]'),
    prevEl: document.querySelector('[data-prev-btn-1]'),
  },
  preloadImages: false,
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
  breakpoints: {
    1024: {
      spaceBetween: 40
    },
  }
});

const currentSlideShow = [
  document.querySelector('[data-current-num]'),
];

currentSlideShow[0].textContent = slider1.realIndex + 1;
document.querySelector('[data-total-num]').textContent = document.querySelectorAll('.about-section-1-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
slider1.on('activeIndexChange', (self) => {
  const splitedIndex = (self.realIndex + 1).toString().split('');
  const firstDigit = splitedIndex;
  gsap.timeline()
    .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
    .add(() => {
      currentSlideShow[0].textContent = firstDigit;
    })
    .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
});

var nav = ['07:00', '08:00', '09:00', '13:00', '18:00', '19:00', '20:00', '21:00'];

const slider2 = new Swiper('.about-section-2-swiper', {
  loop: false,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: document.querySelector('[data-next-btn-2]'),
    prevEl: document.querySelector('[data-prev-btn-2]'),
  },
  pagination: {
    el: '.about-section-2-swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (nav[index]) + '</span>';
    },
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  watchSlidesVisibility: true,
});

const mobileScroller =  mobileTabsScroller(document.querySelector('.about-section-2 .about-section-2-swiper-pagination'));

slider2.on('activeIndexChange', ({activeIndex, ...obj}) => {
  setTimeout(() => {
    if (mobileScroller) {
      const activeBullet = document.querySelector('.about-section-2 .swiper-pagination-bullet-active');
      mobileScroller.scrollTo(activeBullet.offsetLeft - activeBullet.getBoundingClientRect().width * 2);
    }
  }, 100);
})

function mobileTabsScroller($container) {
  if (!document.documentElement.classList.contains('mobile')) return;

  const section2Navigation = $container;
  // const section2Navigation = document.querySelector('.section-6 .swiper-navigation-wrapper');

  checkLeftScrollEdge(section2Navigation.scrollLeft, section2Navigation.scrollLeft);

  document.body.addEventListener('click',function(evt){
    gsap.to(section2Navigation, {
      scrollLeft: section2Navigation.scrollLeft,
      ease: 'power4.out'
    });
  });
  document.body.addEventListener('click',function(evt){
    gsap.to(section2Navigation, {
      scrollLeft: section2Navigation.scrollLeft,
      ease: 'power4.out'
    });
  });
  section2Navigation.addEventListener('scroll',function({ target }){
    checkLeftScrollEdge(target.scrollLeft, target.scrollLeft);
    checkRightScrollEdge(target.scrollLeft, target.scrollWidth);
  });

  function checkLeftScrollEdge(scrollValue, scrollWidth) {}
  function checkRightScrollEdge(scrollValue, scrollWidth) {}

  return {
    scrollTo: (xValue) => {
      gsap.to(section2Navigation, {
        scrollLeft: xValue,
        ease: 'power4.out'
      });
    }
  }
}
