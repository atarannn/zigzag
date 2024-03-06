window.addEventListener('load', () => {
  // function titleAnimation(selector, $scroller) {
  //   document.querySelectorAll(selector).forEach(block => {
  //     let tl = gsap
  //       .timeline({
  //         paused: true,
  //         scrollTrigger: {
  //           scroller: $scroller || document.body,
  //           trigger: block,
  //           start: '-100% top',
  //           scrub: 2
  //         },
  //       })
  //       .fromTo(
  //         block,
  //         { yPercent: 0 },
  //         { yPercent: -20, duration: 1, ease: "power4.out" }
  //       );
  //   });
  // }
  // titleAnimation('.page__inner-title .title');

  function transformAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      if (document.documentElement.clientWidth > 1024) {
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
            { scale: .8, rotate: 10 },
            { scale: 1, rotate: 0, duration: 1, ease: "power4.out" }
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
            { scale: .8, rotate: 10 },
            { scale: 1, rotate: 0,  duration: 1, ease: "power4.out" }
          );
      }
    });
  }
  transformAnimation('.project__section .img');

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
            start: '100% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: .3, stagger: .1, duration: .5, ease: "power4.out" }
        );
    });
  }
  textAnimation('.project__section .project__section-text .dela-text-100');

  function textAnimation2(selector, $scroller) {
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
            start: '100% bottom',
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
  textAnimation2('.project__section .project__section-text .manrope-text-28-normal');


  function textAnimation2WithDelay(selector, $scroller) {
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
            start: '100% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 4, stagger: .01, duration: .5, ease: "power4.out" }
        );
    });
  }
  textAnimation2WithDelay('.project__section-1 .project__section-1__text .manrope-text-28-normal');

  function transformAnimationWithDelay(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
        if (document.documentElement.clientWidth > 1024) {
          let tl = gsap
            .timeline({
              paused: true,
              scrollTrigger: {
                scroller: $scroller || document.body,
                trigger: block,
                start: '-300% top',
                once: true,
              },
            })
            .fromTo(
              block,
              { yPercent: 100 },
              { yPercent: 0, delay: 4, duration: 2, ease: "power4.out" }
            );
        } else {
          let tl = gsap
            .timeline({
              paused: true,
              scrollTrigger: {
                scroller: $scroller || document.body,
                trigger: block,
                start: '-300% top',
                once: true,
              },
            })
            .fromTo(
              block,
              { xPercent: 100 },
              { xPercent: 0, delay: 4, duration: 2, ease: "power4.out" }
            );
        }
    });
  }
  transformAnimationWithDelay('.project__section-1 .img');
})
