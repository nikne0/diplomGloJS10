/*
 *** Created by NikNet 09.12.2019
*/
"use strict";
const calc = () => {

    const setPrice = (clubName, duration, promo) => {
        const prices = {
            'mozaika': {
                1: 1999,
                6: 9900,
                9: 13900,
                12: 19900,
            },

            'schelkovo': {
                1: 2999,
                6: 14990,
                9: 21990,
                12: 24990,
            },
        };

        if (!prices[clubName] || !prices[clubName][parseInt(duration)]) {
            return null;
        }

        let price = prices[clubName][parseInt(duration)];
        if (promo.value === 'ТЕЛО2019') {
            price *= 0.7;
        }
        price = Math.ceil(price);
        return price;
    };

    const recount = () => {
        let clubName = document.querySelector('#card_order input[name=club-name]:checked').value;
        let duration = document.querySelector('#card_order input[name=card-type]:checked').value;
        let promoMessage = document.querySelector('.price-message input[type="text"]');
        let price = setPrice(clubName, duration, promoMessage);
        document.querySelector('#card_order #price-total').innerText = price;
    };

    const initPriceCalculator = () => {
        recount();
        const clubNames = document.querySelectorAll('#card_order input[name=club-name]');
        const durations = document.querySelectorAll('#card_order input[name=card-type]');
        clubNames.forEach(element => element.addEventListener('click', recount));
        durations.forEach(element => element.addEventListener('click', recount));
        document.querySelector('.price-message input[type="text"]').addEventListener('input', recount);
    };

    initPriceCalculator();
};

export default calc;
    