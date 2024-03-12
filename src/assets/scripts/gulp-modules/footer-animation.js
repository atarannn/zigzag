function titleAnimation(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    if (document.documentElement.clientWidth > 1024) {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 5,
            start: '0% bottom',
            end: '70% bottom',
          },
        })
        .fromTo(
          block,
          { yPercent: 30 },
          { yPercent: 0, duration: 1, ease: "power4.out" }
        );
    } else {
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: block,
            scrub: 5,
            start: '100% bottom',
            end: '250% bottom',
          },
        })
        .fromTo(
          block,
          { xPercent: -120 },
          { xPercent: 0, duration: 1, ease: "power4.out" }
        );
    }
  });
}
titleAnimation('.contacts .title__wrapper');
