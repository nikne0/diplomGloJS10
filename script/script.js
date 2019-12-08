/*
 *** Created by NikNet 02.12.2019
*/
"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const handlerMenu = (elem) => {
        elem.style.display = 'block';
    };

    // При клике на кнопку “Выбрать клуб” открываем выпадающее меню
    const toggleClub = () => {
        const clubSelect = document.querySelector('.club-select');
        const clubList = document.querySelector('.clubs-list');
        const clubUl = clubList.querySelector('ul');

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.club-select')) {
                handlerMenu(clubUl);
            } else if (clubUl.style.display === 'block' && !target.classList.contains("club-list")) {
                clubUl.style.display = 'none';
            }
        });

    };
    toggleClub();

    // Бургер меню
  /*  const burgerMenu = () => {

        const clientWidth = document.documentElement.clientWidth;
        const topMenu = document.querySelector('.top-menu');
        const fixedGift = document.querySelector('.fixed-gift');

        if (clientWidth < 768) {
            topMenu.style.display = 'block';
            topMenu.style.position = 'fixed';
            topMenu.style.top = '0px';
            if (fixedGift) fixedGift.style.right = '50px';
        }
    };
    burgerMenu();*/

    // Модальное окно 1
    const togglePopUp = () => {

        const freeVisitForm = document.getElementById('free_visit_form');

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.free-visit')) {
                handlerMenu(freeVisitForm);
            } else {
                target = target.closest('.form-content')
                if (!target) {
                    freeVisitForm.style.display = 'none';
                }
            }
        });
    };
    togglePopUp();

    // Модальное окно 2
    const toggleCallbackForm = () => {
        const callbackForm = document.getElementById('callback_form');
        // const callbackBtn = document.querySelector('.callback-btn');

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.callback-btn')) {
                handlerMenu(callbackForm);
            } else {
                target = target.closest('.form-content')
                if (!target) {
                    callbackForm.style.display = 'none';
                }
            }
        });
    };
    toggleCallbackForm();


    // Меню .popup-menu
    const toggleMenu = () => {
        const popupMenu = document.querySelector('.popup-menu');

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.menu-button')) {
                popupMenu.style.display = 'flex';
            } else {
                target = target.closest('.form-content');
                popupMenu.style.display = 'none';
                if (!target) {
                    popupMenu.style.display = 'none';
                }
            }
        });
    };
    toggleMenu();

   /* // Подарок
    const present = () => {
        const fixedGift = document.querySelector('.fixed-gift');
        const idGift = document.getElementById('gift');

        if (!fixedGift) {
            return;
        } else {
            document.body.addEventListener('click', (event) => {
                let target = event.target;

                if (target.closest('.fixed-gift')) {
                    idGift.style.display = 'block';
                    fixedGift.style.display = 'none';
                } else if (target.closest('.close-btn')) {
                    idGift.style.display = 'none';
                    fixedGift.style.display = 'block';
                } else {
                    target = target.closest('.form-content');
                    if (!target) {
                        idGift.style.display = 'none';
                        fixedGift.style.display = 'block';
                    }
                }
            });

        }
    };
    present();*/

    // Стрелка
    const arrowTop = () => {
        const toTop = document.getElementById('totop');
        toTop.style.display = 'none';

        window.addEventListener('scroll', function () {
            if (pageYOffset > document.documentElement.clientHeight) {
                toTop.style.display = 'block'
            } else {
                toTop.style.display = 'none';
            }
        });
    };
    arrowTop();


    /*const mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide'),
        sliderDots = mainSlider.querySelector('.slider-dots');

    const gallerySlider = document.querySelector('.gallery-slider'),
        slideImg = gallerySlider.querySelectorAll('.slide'),
        galleryDots = gallerySlider.querySelector('.slider-dots');

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

            if (!target.matches('.slider-dots, .dot, .slider-arrow')) {
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
                target.matches('.dot') ||
                event.target.matches('.slider-arrow')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {

            let target = event.target;
            if (target.matches('.slider-dots') ||
                target.matches('.dot') ||
                event.target.matches('.slider-arrow')) {
                startSlide();
            }
        });
        startSlide();
    };
    slider(mainSlider, slides, sliderDots);
    slider(gallerySlider, slideImg, galleryDots);
*/
});



