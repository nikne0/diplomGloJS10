/*
 *** Created by NikNet 06.12.2019
*/
"use strict";


const calc = () => {

    const priceTotal = document.getElementById('price-total'),
        labelMozaika = document.getElementById('card_leto_mozaika'),
        labelSchelkovo = document.getElementById('card_leto_schelkovo'),
        time = document.querySelectorAll('.time input'),
        promoMessage = document.querySelector('.price-message input'),
        promoCode = "ТЕЛО2019";

    const labelClub = [labelMozaika, labelSchelkovo];

    const priceMozaika = {
        one: 1999,
        six: 9900,
        nine: 13900,
        twelve: 19900
    };

    const priceSchelkovo = {
        one: 2995,
        six: 14990,
        nine: 21990,
        twelve: 24990
    };

    function totalPrice(elem, priceClub) {
        switch (elem) {
            case '1':
                if (promoMessage.value === promoCode) {
                    priceTotal.textContent = Math.floor(priceClub.one * 0.7);
                } else {
                    priceTotal.textContent = priceClub.one;
                }
                break;
            case '6':
                if (promoMessage.value === promoCode) {
                    priceTotal.textContent = Math.floor(priceClub.six * 0.7);
                } else {
                    priceTotal.textContent = priceClub.six;
                }
                break;
            case '9':
                if (promoMessage.value === promoCode) {
                    priceTotal.textContent = Math.floor(priceClub.nine * 0.7);
                } else {
                    priceTotal.textContent = priceClub.nine;
                }
                break;
            case '12':
                if (promoMessage.value === promoCode) {
                    priceTotal.textContent = Math.floor(priceClub.twelve * 0.7);
                } else {
                    priceTotal.textContent = priceClub.twelve;
                }
                break;
        }
    }

    labelClub.forEach((item) => {

        item.addEventListener('change', () => {
            if (item === labelSchelkovo) {
                time.forEach((item) => {
                    item.addEventListener('change', () => {
                        let elem = item.value;
                        totalPrice(elem, priceSchelkovo);
                    });
                });
            } else if (item === labelMozaika) {
                time.forEach((item) => {
                    item.addEventListener('change', () => {
                        let elem = item.value;
                        totalPrice(elem, priceMozaika);
                    });
                });
            }
        });
    });

};
calc();

