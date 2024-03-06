window.onload = function () {
  const decorElements = document.querySelectorAll('.preloader__decor-item');
  const logo = document.querySelector('.preloader__image');
  const content = document.querySelector('.page__inner');
  const header = document.querySelector('.main');
  const tl = gsap.timeline({ paused: true });

  // Використовуємо цикл для ітерації через всі decor елементи
  decorElements.forEach((decor, index) => {
    tl.fromTo(decor, { autoAlpha: 0, scale: 1 },
      { autoAlpha: 1, ease: 'power4.easeInOut', duration: 0.2});
  });
  tl.fromTo(logo, { autoAlpha: 0, scale: 1 },
    { autoAlpha: 1, scale: 1.2, delay: 0.5, ease: 'power4.easeInOut', duration: 0.5 });
  tl.play();

  window.setTimeout(() => {
    document.body.classList.add('loaded');
    tl.fromTo(header, { yPercent: -200 },
      { yPercent: 0, delay: 0.7, ease: 'power4.easeInOut', duration: 0.3 });
    tl.fromTo(content, { autoAlpha: 0 },
      { autoAlpha: 1, ease: 'power4.easeInOut', duration: 0.5 });
    tl.play();
  }, 3000);
};
