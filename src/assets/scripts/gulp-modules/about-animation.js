window.addEventListener('load', () => {
  function titleAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '-100% top',
            scrub: 1,
          },
        })
        .fromTo(
          block,
          { yPercent: 0 },
          { yPercent: -20, duration: 1, ease: "power4.out" }
        );
    });
  }
  titleAnimation('.page__inner-title .title-1, .page__inner-title .title-2');

  function transformAnimationDecor(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      if (document.documentElement.clientWidth > 680) {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: "0% top",
              end: "100% top",
            },
          })
          .fromTo(
            block,
            { xPercent: -5, yPercent: -20},
            { xPercent: 0, yPercent: 0, duration: 1, ease: "power4.out" }
          );
      } else {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: "-50% top",
              end: "100% top",
            },
          })
          .fromTo(
            block,
            { yPercent: 0},
            { yPercent: -30, duration: 1, ease: "power4.out" }
          );
      }
    });
  }
  transformAnimationDecor('.page__inner-title .decor');

  function transformAnimationBlocksLeft(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '30% bottom',
            once: true
          },
        })
        .fromTo(
          block,
          { xPercent: 200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    });
  }
  transformAnimationBlocksLeft('.about-section-3__text .btn-style');

  function transformAnimationBlocksRight(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '30% bottom',
            once: true
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    });
  }
  transformAnimationBlocksRight('.about-section-3 .img ');

  function textAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: text,
            start: '150% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, stagger: .01, duration: .5, ease: "power4.out" }
        );
    });
  }
  textAnimation('.about-section-2__head .dela-text-100, .about-section-3__text .dela-text-100, .about-section-3__text .manrope-text-28');

  const section = document.querySelector('.about-section-4');

  if (document.documentElement.clientWidth > 680) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          pin: ".about-section-4",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo('.about-section-4 .block-style-column__info-wrapper--desktop .img', {scale: 0.7},{scale: 1, duration: .5 }, '<')
  }

  const elements = document.querySelectorAll('.about-section-2 .swiper-slide .top img');
  const firstElement = elements[0];
  const height = firstElement.offsetHeight;

// Отримайте значення змінних CSS
  const offset40 = getComputedStyle(document.documentElement).getPropertyValue('--offset-40');
  const offset20 = getComputedStyle(document.documentElement).getPropertyValue('--offset-20');

  const calcTop = `calc(${height}px + ${offset40.trim()} + ${offset20.trim()})`;

  const swiperBtnSlider2 = document.querySelector('.about-section-2__swiper-btn');
  swiperBtnSlider2.style.top = calcTop;
})
