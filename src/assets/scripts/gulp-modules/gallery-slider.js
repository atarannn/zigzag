window.addEventListener('DOMContentLoaded', function() {
  function sideSwitchArrow(swiper, arrowArgs, conArgs) {
    const arrow = arrowArgs;
    const container = conArgs;
    const mediumCordValue = document.documentElement.clientWidth / 2;
    document.body.append(arrow);
    container.style.cursor = 'none';
    arrow.style.cursor = 'none';
    arrow.style.zIndex = 10;
    arrow.__proto__.hide = function some() {
      this.style.opacity = '0';
      this.style.pointerEvents = 'none';
    };
    arrow.__proto__.show = function some() {
      this.style.opacity = '1';
    };
    arrow.dataset.side = 'leftSide';
    arrow.hide();
    container.addEventListener('mousemove', desktopNavButtonHandler);
    container.addEventListener('mouseenter', () => {
      arrow.show();
    });
    container.addEventListener('mouseleave', () => {
      arrow.hide();
    });
    if (document.documentElement.clientWidth < 1024) {
      window.removeEventListener('mousemove', desktopNavButtonHandler);
      arrow.remove();
    }

    function desktopNavButtonHandler(evt) {
      arrow.style.left = `${evt.clientX - 18}px`;
      arrow.style.top = `${evt.clientY - 18}px`;
      getCursorSide(evt.clientX);
    }

    function getCursorSide(x) {
      if (x < (mediumCordValue)) {
        arrow.classList.add('left-side');
        arrow.dataset.side = 'leftSide';
      } else {
        arrow.classList.remove('left-side');
        arrow.dataset.side = 'rightSide';
      }
    }
    container.addEventListener('click', () => {
      switchGallerySlide(arrow.dataset.side);
    });

    // if (document.documentElement.clientWidth < 1024) {
    //   container.removeEventListener('click', clickToChange);
    // }

    const navigate = {
      leftSide: () => {
        if (swiper.isBeginning) return; // Перевірка, чи це перший слайд
        swiper.slidePrev();
      },
      rightSide: () => {
        if (swiper.isEnd) return; // Перевірка, чи це останній слайд
        swiper.slideNext();
      },
    };

    function switchGallerySlide(side) {
      if (side === 'leftSide' && swiper.isBeginning) {
        // Якщо це перший слайд і користувач хоче перейти з першого на останній
        swiper.slideTo(swiper.slides.length - 1); // Перехід на останній слайд
      } else if (side === 'rightSide' && swiper.isEnd) {
        // Якщо це останній слайд і користувач хоче перейти з останнього на перший
        swiper.slideTo(0); // Перехід на перший слайд
      } else {
        // В інших випадках виконуємо звичайні дії
        navigate[side]();
      }
    }
  }

  const slider = new Swiper('.gallery-section-1-swiper', {
    loop: true,
    navigation: {
      nextEl: document.querySelector('[data-next-btn-1]'),
      prevEl: document.querySelector('[data-prev-btn-1]'),
    },
    preloadImages: false,
    lazy: true,
    speed: 400,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    watchSlidesVisibility: true,
  });

  const slider2 = new Swiper('.gallery-section-2-swiper', {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 20,
    navigation: {
      nextEl: document.querySelector('[data-next-btn-2]'),
      prevEl: document.querySelector('[data-prev-btn-2]'),
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

  currentSlideShow[0].textContent = slider2.realIndex + 1;
  document.querySelector('[data-total-num]').textContent = document.querySelectorAll('.gallery-section-2-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
  slider2.on('activeIndexChange', (self) => {
    const splitedIndex = (self.realIndex + 1).toString().split('');
    const firstDigit = splitedIndex;
    gsap.timeline()
      .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
      .add(() => {
        currentSlideShow[0].textContent = firstDigit;
      })
      .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
  });

  sideSwitchArrow(
    slider,
    document.querySelector('.moving-arrow'),
    document.querySelector('.gallery-section-1-swiper'),
  );

  const buttons = document.querySelectorAll('button[data-view]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      initializeSliderWithImages(view, slider);

      button.classList.add('active');
    });
  });


  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
    });
  });

  function initializeSliderWithImages(view, slider) {
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    const currentButton = document.querySelector(`button[data-view="${view}"]`);
    currentButton.classList.add('active');

    slider.removeAllSlides();

    if (view === 'complex') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
      ]);
    } else if (view === 'lobby') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
      ]);
    } else if (view === 'yard') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
      ]);
    } else if (view === 'roof') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/1.jpg"></div>',
      ]);
    }

    slider.update();
    slider.slideTo(0);
  }

  initializeSliderWithImages('complex', slider);
});
