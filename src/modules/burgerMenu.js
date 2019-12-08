/*
 *** Created by NikNet 08.12.2019
*/
"use strict";


const burgerMenu = () => {

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

export default burgerMenu;
    