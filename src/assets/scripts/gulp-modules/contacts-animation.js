window.addEventListener('load', () => {


  function titleAnimation(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      if (document.documentElement.clientWidth > 1024) {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: '-50% top',
              end: '70% top',
            },
          })
          .fromTo(
            block,
            { yPercent: 10 },
            { yPercent: -10, duration: 1, ease: "power4.out" }
          );
      } else {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: block,
              scrub: 1,
              start: '-50% top',
              end: '70% top',
            },
          })
          .fromTo(
            block,
            { xPercent: 0 },
            { xPercent: -120, duration: 1, ease: "power4.out" }
          );
      }
    });
  }
  titleAnimation('.contacts .title__wrapper');
})
