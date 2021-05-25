function ScrollSlide() {
  const images = document.querySelectorAll('.slide-in');
  if (!images.length) return;
  const options = { rootMargin: '0px', threshold: 0.5 };
  const observer = new IntersectionObserver(onObserve, options);

  images.forEach((image) => observer.observe(image));

  function checkInView({ isIntersecting, target }) {
    if (!isIntersecting) return;
    target.classList.add('active');
    observer.unobserve(target);
  }

  function onObserve(entries) {
    entries.forEach(checkInView);
  }
}

ScrollSlide();
