/*
 *** Created by NikNet 08.12.2019
*/
"use strict";


const slider = (slider, slides, dots) => {

    let currentSlide = 0,
        interval,
        li;


    slides.forEach((item) => {
        li = document.createElement('li');
        li.className = 'dot';
        li.innerHTML = '<button></button>';
        dots.appendChild(li);
    });

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('active');
    slides[0].style.display = 'block';

    const prevSlide = (elem, index, strClass, active) => {
        elem[index].classList.remove(strClass);
        if (active) elem[index].style.display = active;
    };

    const nextSlide = (elem, index, strClass, active) => {
        elem[index].classList.add(strClass);
        if (active) elem[index].style.display = active;
    };

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'active', 'none');
        prevSlide(dot, currentSlide, 'active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'active', 'block');
        nextSlide(dot, currentSlide, 'active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.slider-dots, .slider-arrow')) {
            return;
        }

        prevSlide(slides, currentSlide, 'active', 'none');
        prevSlide(dot, currentSlide, 'active');

        if (target.matches('.slider-arrow.next')) {
            currentSlide++;
        } else if (target.matches('.slider-arrow.prev')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'active', 'block');
        nextSlide(dot, currentSlide, 'active');
    });

    slider.addEventListener('mouseover', (event) => {

        let target = event.target;
        if (target.matches('.slider-dots') ||
            // target.matches('.dot') ||
            event.target.matches('.slider-arrow')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {

        let target = event.target;
        if (target.matches('.slider-dots') ||
            // target.matches('.dot') ||
            event.target.matches('.slider-arrow')) {
            startSlide();
        }
    });
    startSlide();
};

export default slider;

    