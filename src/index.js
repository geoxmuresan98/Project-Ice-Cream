"use strict";

window.addEventListener('DOMContentLoaded', () => {


// Menu 

const menu = document.querySelector('.menu'),
      menuOpen = document.querySelector('.hero-wrapper__nav'),
      menuClose = document.querySelector('.menu-close'),
      menuBtn = document.querySelector('.menu-btn');


    menu.addEventListener('click', () => {
        menuOpen.classList.add('hero-wrapper__nav-active');
        menuClose.classList.add('menu-close__active');
        menuBtn.classList.add('menu-btn__active');
    });

    menuClose.addEventListener('click', () => {
        menuOpen.classList.remove('hero-wrapper__nav-active');
        menuClose.classList.remove('menu-close__active');
        menuBtn.classList.remove('menu-btn__active');
    });


// Slides 

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
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

});
