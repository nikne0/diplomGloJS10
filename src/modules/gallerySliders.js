/*
 *** Created by NikNet 10.12.2019
*/
"use strict";
const gallerySliders = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slideImg = gallerySlider.querySelectorAll('.slide'),
        galleryDots = gallerySlider.querySelector('.slider-dots');


    let currentSlide = 0,
        interval,
        li;


    slideImg .forEach((item) => {
        li = document.createElement('li');
        li.className = 'dot';
        li.innerHTML = '<button></button>';
        galleryDots.appendChild(li);
    });

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('active');
    slideImg[0].style.display = 'block';

    const prevSlide = (elem, index, strClass, active) => {
        elem[index].classList.remove(strClass);
        if (active) elem[index].style.display = active;
    };

    const nextSlide = (elem, index, strClass, active) => {
        elem[index].classList.add(strClass);
        if (active) elem[index].style.display = active;
    };

    const autoPlaySlide = () => {
        prevSlide(slideImg , currentSlide, 'active', 'none');
        prevSlide(dot, currentSlide, 'active');
        currentSlide++;

        if (currentSlide >= slideImg .length) {
            currentSlide = 0;
        }

        nextSlide(slideImg , currentSlide, 'active', 'block');
        nextSlide(dot, currentSlide, 'active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.slider-dots, .slider-arrow')) {
            return;
        }

        prevSlide(slideImg , currentSlide, 'active', 'none');
        prevSlide(dot, currentSlide, 'active');

        if (target.matches('.slider-arrow.next')) {
            stopSlide();
            currentSlide++;
        }
        if (target.matches('.slider-arrow.prev')) {
            stopSlide();
            currentSlide--;
        }
        if (target.matches('.slider-dots')) {
            stopSlide();
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slideImg .length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slideImg .length - 1;
        }

        nextSlide(slideImg , currentSlide, 'active', 'block');
        nextSlide(dot, currentSlide, 'active');
    });

    gallerySlider.addEventListener('mouseover', (event) => {

        let target = event.target;
        if (target.matches('.slider-dots') ||
            target.matches('.dot') ||
            event.target.matches('.slider-arrow')) {
            stopSlide();
        }
    });

    gallerySlider.addEventListener('mouseout', (event) => {

        let target = event.target;
        if (target.matches('.slider-dots') ||
            target.matches('.dot') ||
            event.target.matches('.slider-arrow')) {
            startSlide();
        }
    });
    startSlide();
};

export default gallerySliders;
    