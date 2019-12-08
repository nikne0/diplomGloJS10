/*
 *** Created by NikNet 08.12.2019
*/
"use strict";

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
            } else if (target.closest('.close-btn') ||
                target.closest('.close_icon')) {
                idGift.style.display = 'none';
                fixedGift.style.display = 'none';
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

export default present;
    