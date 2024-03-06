window.addEventListener('load', () => {
  function titleAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            start: '0% top',
            end: '100% top',
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
  titleAnimation('.page__inner-title .title');

  function transformAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      if (document.documentElement.clientWidth > 680) {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: "-400% top",
              end: "200% top",
            },
          })
          .fromTo(
            block,
            { yPercent: 0, rotate: 0 },
            { yPercent: -70, rotate: 40, duration: 1, ease: "power4.out" }
          );
      } else {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: "-200% top",
              end: "100% top",
            },
          })
          .fromTo(
            block,
            { yPercent: -50, rotate: 30 },
            { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
          );
      }
    });
  }
  transformAnimation('.location__section-1 .decor');

  function textAnimationWithDelay(selector, $scroller) {
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
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 4, stagger: .1, duration: .5, ease: "power4.out" }
        );
    });
  }
  textAnimationWithDelay('.location__section-1 .manrope-text-28-normal');

  function cardAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      gsap.timeline({
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: '.location__section-2',
          start: '0% center',
          scrub: true,
        },
      })
        .fromTo(
          block,
          { rotate: 20, scale: 1 },
          { rotate: 0, scale: 1.05, stagger: 1, duration: .5, ease: "power4.out" }
        );
    })
  }
  cardAnimation('.location__section-2 .location__section-2__card .bg');

  function paralaxesScreens() {
    document.querySelectorAll('.location__section-3').forEach(el => {
      if (document.documentElement.clientWidth > 1024) {
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
            y: -200,
          }, {
            y: 200,
          })
          .fromTo(el.querySelector('.map__scale'), {
            scale: 1.2
          }, {
            scale: 1
          }, '<');
      } else {
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
            scale: 1.2
          }, {
            scale: 1
          }, '<');
      }
    })
  }
  paralaxesScreens();
})


