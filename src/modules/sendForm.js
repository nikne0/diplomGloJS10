/*
 *** Created by NikNet 07.12.2019
*/
"use strict";

const sendForm = () => {

    const errorMessage = "Error send......",
        policyMessage = "ПОДТВЕРДТИТЕ ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ!"


    const idThanks = document.getElementById("thanks");
    const statusText = document.createElement('div');
    statusText.style.cssText = 'font-size: 2rem; color: red';
    const popUp = document.querySelectorAll('.popup');

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('banner-form');
    const form4 = document.getElementById('card_order');
    const form5 = document.getElementById('footer_form');

    let arrforms = [form1, form2, form3, form4, form5];

    arrforms.forEach((item) => {

        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusText);

            const checkBox = item.querySelector('input[type=checkbox]');

            if (checkBox && !checkBox.checked) {
                item.appendChild(statusText);
                statusText.textContent = policyMessage;
                return false;
            }

            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });


            postData(body)
                .then((response) => {
                    if (response.status !== 200) throw new Error('status network not 200');
                    idThanks.style.display = 'block';
                })
                .then(() => {
                    item.reset();
                    statusText.style.display = 'none';

                    if (item !== form3 && item !== form4 && item !== form5) {
                        item.style.display = 'none';
                    }

                    idThanks.addEventListener('click', (event) => {
                        let target = event.target;
                        idThanks.style.display = 'none';

                        if (!target.matches('.form-content')) {
                            popUp.forEach((item) => {
                                item.style.display = 'none';
                            });
                        } else {
                            target = target.matches('.close-btn');
                            if (target) {
                                idThanks.style.display = 'none';
                                popUp.forEach((item) => {
                                    item.style.display = 'none';
                                });
                            }
                        }
                    });
                })
                .catch(error => {
                    statusText.textContent = errorMessage;
                    console.error(error);
                });
        });

        item.addEventListener('input', (event) => {
            const target = event.target,
                inputPhone = document.querySelectorAll('input[type=tel]'),
                inputText = document.querySelectorAll('p input[type=text]');

            const validateForm = (input, inputType, pattern) => {
                if (target.matches(inputType)) {
                    input.forEach((item) => {
                        item.addEventListener('change', () => {
                            if (item.value != item.value.match(pattern)) {
                                item.value = '';
                                item.style.border = '2px solid red';
                            } else {
                                item.style.border = 'none';
                            }
                        });
                    });
                }
            };

            validateForm(inputPhone, 'input[type=tel]', /^\+?[78]\d{10}$/);
            validateForm(inputText, 'p input[type=text]', /^[а-яА-ЯёЁ0-9\s]+$/);
        });


    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

};

export default sendForm;


    