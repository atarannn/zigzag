window.addEventListener('load', () => {
  function lastNewsAnimation(selector, $scroller) {
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
          { yPercent: 0, stagger: .2, duration: 1, ease: "power4.out" }
        );
    })
  }
  lastNewsAnimation('.news__list .news');

  function textTransformAnimation(selector, $scroller) {
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
          { yPercent: 0, delay: .3, stagger: .1, duration: .5, ease: "power4.out" }
        );
    });
  }
  textTransformAnimation('.last-news .dela-text-100');

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
  textAnimationWithDelay('.single-news .dela-text-24, .single-news .dela-text-42');
})
