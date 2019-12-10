/*
 *** Created by NikNet 08.12.2019
*/
"use strict";

const toggleAll = () => {

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

};
export default toggleAll;
    