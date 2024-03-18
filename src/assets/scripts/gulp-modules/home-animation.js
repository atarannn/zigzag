const $scroller = document.body;

// Функція, яка викликає textAnimation після початку прокрутки
function onScroll() {
  textAnimation('.section-2__inner-text .manrope-text-28, .section-3__inner-text .col .manrope-text-28, .section-4__inner-text .col .manrope-text-28, .section-5__text .manrope-text-28, .section-6__bottom-text .col .manrope-text-28', $scroller);
  window.removeEventListener('scroll', onScroll);
}

window.addEventListener('scroll', onScroll);

// Функція для анімації тексту
function textAnimation(selector, $scroller) {
  document.querySelectorAll(selector).forEach(text => {
    let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
    if (mathM === null) return;
    mathM = mathM.map(el => `<span class="first-span" style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
    text.innerHTML = mathM.join(' ');

    let tl;

    if (document.documentElement.clientWidth > 1024) {
      tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller,
            trigger: text,
            start: '100% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, stagger: .01, duration: .5, ease: "power4.out" }
        );
    } else {
      tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller,
            trigger: text,
            start: '80% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, stagger: .01, duration: .5, ease: "power4.out" }
        );
    }
  });
}

// блок 1
window.setTimeout(() => {
  document.body.classList.add('loading');

  const titleFirst = document.querySelector('.section-1 .title-1');
  const titleSecond = document.querySelector('.section-1 .title-2');

  const tl = gsap.timeline({ paused: true });
  tl.fromTo(titleFirst, {xPercent: 0, autoAlpha: 1},
    {xPercent: -200, autoAlpha: 0, delay: 1, ease: 'power4.easeInOut', duration: .7 });
  tl.fromTo(titleSecond, {xPercent: 0, autoAlpha: 1},
    {xPercent: 200, autoAlpha: 0, ease: 'power4.easeInOut', duration: .7 }, "<");
  tl.play();

}, 2000);


function pinAnimation1() {
  const section1 = document.querySelector('.section-1');
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section1,
        pin: ".section-1 .video-desk",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
}
pinAnimation1();

function pinAnimation2() {
  const section1 = document.querySelector('.section-1');
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section1,
        pin: ".section-1 .video-mob",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
}
pinAnimation2();

// блок 2
function transformTitle2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "20% bottom",
            end: "100% bottom",
            scrub: 1,
          },
        })
        .fromTo(
          block,
          { xPercent: -120, rotate: -10 },
          { xPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "50% bottom",
            end: "250% bottom",
            scrub: 1,
          },
        })
        .fromTo(
          block,
          { xPercent: -120, rotate: -10 },
          { xPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformTitle2('.section-2__title__wrapper .title');

function transformAnimationBtn2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '200% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '250% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationBtn2('.section-2__inner-img .link-style, .section-2__inner .btn-style');

function transformAnimationImg2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.set(block, { yPercent: 100 }); // Встановлюємо початковий стан блоку

    if (document.documentElement.clientWidth > 680) {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "-100% bottom",
          end: "0% bottom",
          scrub: 1,
        }
      });

      tl.to(block, {
        yPercent: 0,
        duration: 1,
        ease: "power4.out"
      });
    } else {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "-30% bottom",
          end: "100% bottom",
          scrub: 1,
        }
      });

      tl.to(block, {
        yPercent: 0,
        duration: 1,
        ease: "power4.out"
      });
    }
  });
}
transformAnimationImg2('.section-2__inner-img .img');

// блок 3
function transform1Title3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "250% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform1Title3('.section-3__title__wrapper .title-1');

function transform2Title3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "250% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform2Title3('.section-3__title__wrapper .title-2');

function transformAnimationBtn3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '0% bottom',
            end: '200% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '250% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationBtn3('.section-3__inner-text .btn-style');

function transformAnimationImg3(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.set(block, { xPercent: -100}); // Встановлюємо початковий стан блоку

    if (document.documentElement.clientWidth > 680) {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "0% bottom",
          end: "80% bottom",
          scrub: 1,
        }
      });

      tl.to(block, {
        xPercent: 0,
        duration: 1,
        ease: "power4.out"
      });
    } else {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "50% bottom",
          end: "100% bottom",
          scrub: 1,
        }
      });

      tl.to(block, {
        xPercent: 0,
        duration: 1,
        ease: "power4.out"
      });
    }
  });
}
transformAnimationImg3('.section-3__inner-img .img');

// блок 4
function transform1Title4(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform1Title4('.section-4__title__wrapper .title-1');

function transform2Title4(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform2Title4('.section-4__title__wrapper .title-2');

function transformAnimationBtn4(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '0% bottom',
            end: '200% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '250% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationBtn4('.section-4__inner-text .btn-style');

function transformAnimationDecor4(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { yPercent: -100, xPercent: 200, rotate: 90 },
          { yPercent: 0, xPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { yPercent: -100, xPercent: 100, rotate: 90 },
          { yPercent: 0, xPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationDecor4('.section-4__title__wrapper .decor');

function transformAnimationImg4(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.set(block, { xPercent: 100, yPercent: 20, rotate: 50 }); // Встановлюємо початковий стан блоку

    if (document.documentElement.clientWidth > 680) {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "40% bottom",
          end: "70% bottom",
          scrub: 1
        }
      });

      tl.to(block, {
        xPercent: 0,
        yPercent: 0,
        rotate: 0,
        duration: 1,
        ease: "power4.out"
      });

    } else {
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || window,
          trigger: block,
          start: "20% bottom",
          end: "100% bottom",
          scrub: 1
        }
      });

      tl.to(block, {
        xPercent: 0,
        yPercent: 0,
        rotate: 0,
        duration: 1,
        ease: "power4.out"
      });
    }
  });
}
transformAnimationImg4('.section-4__inner .img');

// блок 5
function transformTitle5(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformTitle5('.section-5__title__wrapper .title');

function transformAnimationBtn5(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '200% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '100% bottom',
            end: '250% bottom',
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -200, },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationBtn5('.section-5__text .link-style');

function transformAnimationDecor1Block5(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { yPercent: 0, rotate: 50 },
          { yPercent: -100, rotate: 1, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { yPercent: 0, rotate: 50 },
          { yPercent: -50, rotate: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationDecor1Block5('.section-5__text .decor-1');

function transformAnimationDecor2Block5(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { xPercent: -100, rotate: 50 },
          { xPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 1
          },
        })
        .fromTo(
          block,
          { xPercent: -50, rotate: 50, yPercent: 0 },
          { xPercent: 0, yPercent: 10, rotate: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformAnimationDecor2Block5('.section-5__text .decor-2');

function paralaxesScreens() {
  document.querySelectorAll('.section-5__map').forEach(el => {
    gsap.timeline({
      defaults: {
        force3D: true,
        ease: 'none'
      },
      scrollTrigger: {
        trigger: el,
        scrub: 1,
      }

    })
      .fromTo(el.querySelector('.map__transform'), {
        y: -50,
      }, {
        y: 50,
      })
      .fromTo(el.querySelector('.map__scale'), {
        scale: 1.1
      }, {
        scale: 1
      }, '<');
  })
}
paralaxesScreens();

// блок 6
function transform1Title6(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform1Title6('.section-6__title__wrapper .title-1');

function transform2Title6(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: 200},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transform2Title6('.section-6__title__wrapper .title-2__wrapper');

function transformImg6(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          scrub: 1,
        },
      })
      .fromTo(
        block,
        { yPercent: -5},
        { yPercent: 0, duration: 1, ease: "power4.out" }
      );
  });
}
transformImg6('.section-6__inner .decor-people');
function transformAnimationDecor6(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          start: '100% bottom',
          scrub: 1
        },
      })
      .fromTo(
        block,
        { scale: .8, rotate: .8 },
        { scale: 1, rotate: 1, duration: 1, ease: "power4.out" }
      );
  });
}
transformAnimationDecor6('.section-6__bottom-text .logo');

// блок 7
function transformTitle7(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 680) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "100% bottom",
            end: "150% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: "150% bottom",
            end: "350% bottom",
            scrub: 5,
          },
        })
        .fromTo(
          block,
          { xPercent: -150},
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
transformTitle7('.section-7__title__wrapper .title');

function newsAnimation(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: block,
        start: '-100% bottom',
        once: true,
      },
    })
      .fromTo(
        block,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.2, duration: 1, ease: "power4.out" }
      );
  })
}
newsAnimation('.news__list .news');

