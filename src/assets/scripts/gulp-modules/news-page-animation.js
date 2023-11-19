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
})
