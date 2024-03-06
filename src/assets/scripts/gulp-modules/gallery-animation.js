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
            scrub: 1
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
              start: "-100% top",
              end: "200% top",
            },
          })
          .fromTo(
            block,
            { yPercent: -100, rotate: 40 },
            { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out" }
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
            { yPercent: 0, rotate: 0 },
            { yPercent: -30, rotate: 30, duration: 1, ease: "power4.out" }
          );
      }
    });
  }
  transformAnimationDecor('.decor-1, .decor-2, .decor-3, .decor-4');

  function textAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span class="first-span" style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      if (document.documentElement.clientWidth > 1024) {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
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
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: text,
              start: '300% bottom',
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
  textAnimation('.gallery-section-2__top .dela-text-100');
})
