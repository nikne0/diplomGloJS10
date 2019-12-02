/*
 *** Created by NikNet 02.12.2019
*/
"use strict";

document.addEventListener('DOMContentLoaded', () => {


    // При клике на кнопку “Выбрать клуб” открываем выпадающее меню
    const toggleClub = () => {
        const clubSelect = document.querySelector('.club-select');
        const clubList = document.querySelector('.clubs-list');
        const clubUl = clubList.querySelector('ul');

        const handlerMenu = () => {
            clubUl.style.display = 'block';
        };

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.club-select')) {
                handlerMenu();
            } else if (clubUl.style.display === 'block' && !target.classList.contains("club-list")) {
                clubUl.style.display = 'none';
            }
        });

    };
    toggleClub();

});