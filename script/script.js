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
    const burgerMenu = () => {

        const clientWidth = document.documentElement.clientWidth;
        const topMenu = document.querySelector('.top-menu');

        if (clientWidth < 768) {
            topMenu.style.display = 'block';
            topMenu.style.position = 'fixed';
            topMenu.style.top = '0px';
        }
    };
    burgerMenu();

    // Модальное окно 1
    const togglePopUp = () => {
        // const formContent = document.querySelector('.form-content');
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

    // Подарок
    const present = () => {
        const fixedGift = document.querySelector('.fixed-gift');
        const idGift = document.getElementById('gift');

        if (fixedGift) {

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
    present();

    // Стрелка
    const arrowTop = () => {
        const toTop = document.getElementById('totop');
        toTop.style.display = 'none';

        window.addEventListener('scroll', function() {
            if (pageYOffset > document.documentElement.clientHeight) {
                toTop.style.display = 'block'
            } else {
                toTop.style.display = 'none';
            }
        });
    };
    arrowTop();




});



