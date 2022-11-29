function scrollTo(to, duration = 700) {
  const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
      else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

export function scrollUp() {
  let btn = document.querySelector('.scroll-up');
  window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
          btn.classList.add('scroll-up_visible');
      } else {
          btn.classList.remove('scroll-up_visible');
      }
  });

  btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
  }
}