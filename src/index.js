/*
 *** Created by NikNet 08.12.2019
*/
"use strict";

import arrowTop from './modules/arrowTop';
import burgerMenu from './modules/burgerMenu';
import calc from './modules/calc';
import present from './modules/present';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import gallerySliders from './modules/slider';
import SliderCarousel from './modules/SliderCarousel';
import toggleAll from './modules/toggleAll';




// Стрелка
arrowTop();

// Бургер меню
burgerMenu();

//Калькулятор
calc();

// Подарок
present();

// Форма
sendForm();

// Слайдер
const mainSlider = document.querySelector('.main-slider'),
    slides = mainSlider.querySelectorAll('.slide'),
    sliderDots = mainSlider.querySelector('.slider-dots');

const gallerySlider = document.querySelector('.gallery-slider'),
    slideImg = gallerySlider.querySelectorAll('.slide'),
    galleryDots = gallerySlider.querySelector('.slider-dots');

slider(mainSlider, slides, sliderDots);
gallerySliders(gallerySlider, slideImg, galleryDots);



// ВСЕ TOOGLE
toggleAll();

//Карусель
const carousel = new SliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    prev: '#slide-prev',
    next: '#slide-next',
    infinity: true,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1024,
            slideToShow: 3
        },

        {
            breakpoint: 768,
            slideToShow: 2
        },

        {
            breakpoint: 576,
            slideToShow: 1
        }
    ],
});
carousel.init();
