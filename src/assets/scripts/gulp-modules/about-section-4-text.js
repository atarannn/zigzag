function handleMobileBlockImageHorizontalScroll(el) {
  const parent = el.closest('.about-section-4');
  const slider = parent.querySelector('input');
  const sliderSvg = el;
  const slideSvgButton = sliderSvg.querySelector('.swipe');
  const slideSvgButtonRadius = +slideSvgButton.querySelector('circle').getAttribute('r');
  const imageScrollContainer = parent.querySelector('.block-style-column__mobile-scroller');
  const sliderSvgWidth = sliderSvg.getAttribute('viewBox').split(' ')[2];

  slider.value = 0;
  slider.setAttribute('max', imageScrollContainer.scrollWidth);

  slider.addEventListener('input', (evt) => {
    imageScrollContainer.scrollTo({
      left: evt.target.value - window.innerWidth / 2
    });

    const swipeXoffset = gsap.utils.mapRange(
      0 ,
      evt.target.getAttribute('max'),
      slideSvgButtonRadius * 2, sliderSvgWidth,
      evt.target.value
    );
    sliderSvg.insertAdjacentHTML('afterbegin', `
      <circle cx="40" cy="40" r="39.5" stroke="#fff" stroke-dasharray="1 10" class="Ellipse 83"></circle>
    `);
    slideSvgButton.setAttribute('transform', `translate(${swipeXoffset - (slideSvgButtonRadius * 2)} ,0)`)
  });

  slider.value = imageScrollContainer.scrollWidth / 2;
  slider.dispatchEvent(new Event('input'));
}

document.querySelectorAll('.block-style-column__mobile-slider').forEach(handleMobileBlockImageHorizontalScroll);

window.addEventListener('DOMContentReloaded', () => {
  document.querySelectorAll('.block-style-column__mobile-slider').forEach(handleMobileBlockImageHorizontalScroll);

})
