/*
 *** Created by NikNet 06.12.2019
*/
"use strict";

const calc = () => {
    const calcBlock = document.getElementById('card_order'),
        priceTotal = document.getElementById('price-total'),
        labelMozaika = document.getElementById('card_leto_mozaika'),
        labelSchelkovo = document.getElementById('card_leto_schelkovo'),
        time = document.querySelector('.time'),
        promoMessage = document.querySelector('.price-message input'),
        promoCode = "ТЕЛО2019";

    const priceMozaika = {
        1: 1999,
        6: 9900,
        9: 13900,
        12: 19900
    };

    const priceSchelkovo = {
        1: 2999,
        6: 14990,
        9: 21990,
        12: 24990
    };



    const calcSum = (obj) => {
        time.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('input');

            if (target) {
                for (let key in obj) {
                    if (target.value == key) {
                        priceTotal.textContent = obj[key];
                    }
                }
            }
        });
    };

    calcBlock.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('input');

        if (labelMozaika.checked) calcSum(priceMozaika);
        if (labelSchelkovo.checked) calcSum(priceSchelkovo);
    });

    calcBlock.addEventListener('change', () => {
        const totalPrice = priceTotal.textContent;
        if (promoMessage.value === promoCode) {
            priceTotal.textContent = Math.floor(totalPrice * 0.7);
        }
    });
};

export default calc;
    