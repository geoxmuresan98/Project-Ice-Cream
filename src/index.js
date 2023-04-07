window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.customer-wrapper__header'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

  let slideIndex = 1;

  showSlides();

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => {
      item.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });
});
