!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.getElementById("totop");e.style.display="none",window.addEventListener("scroll",(function(){pageYOffset>document.documentElement.clientHeight?e.style.display="block":e.style.display="none"}))};var s=()=>{const e=document.documentElement.clientWidth,t=document.querySelector(".top-menu"),n=document.querySelector(".fixed-gift");e<768&&(t.style.display="block",t.style.position="fixed",t.style.top="0px",n&&(n.style.right="50px"))};var i=()=>{const e=document.getElementById("card_order"),t=document.getElementById("price-total"),n=document.getElementById("card_leto_mozaika"),o=document.getElementById("card_leto_schelkovo"),s=document.querySelector(".time"),i=document.querySelector('.price-message input[type="text"]'),l={1:1999,6:9900,9:13900,12:19900},r={1:2999,6:14990,9:21990,12:24990},d=e=>{s.addEventListener("click",n=>{let o=n.target;if(o=o.closest("input"),o)for(let n in e)o.value==n&&(t.textContent=e[n])})};(n||o)&&(e.addEventListener("click",e=>{let t=e.target;t=t.closest("input"),n.checked&&d(l),o.checked&&d(r)}),e.addEventListener("change",e=>{let n=e.target;n=n.closest('input[type="checkbox"]')||n.closest('input[placeholder="Ваше имя..."]')||n.closest('input[placeholder="Ваш номер телефона..."]');const o=t.textContent;"ТЕЛО2019"!==i.value||n||(t.textContent=Math.ceil(.7*o))}))};var l=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e&&document.body.addEventListener("click",n=>{let o=n.target;o.closest(".fixed-gift")?(t.style.display="block",e.style.display="none"):o.closest(".close-btn")||o.closest(".close_icon")||o.matches(".overlay")?(t.style.display="none",e.style.display="none"):(o=o.closest(".form-content"),o||(t.style.display="none"))})};var r=()=>{const e=document.getElementById("thanks"),t=document.createElement("div");t.style.cssText="font-size: 2rem; color: red";const n=document.querySelectorAll(".popup");let o=document.getElementById("price-total");const s=document.getElementById("footer_leto_mozaika"),i=document.getElementById("footer_leto_schelkovo"),l=document.getElementById("form1"),r=document.getElementById("form2"),d=document.getElementById("banner-form"),c=document.getElementById("card_order"),a=document.getElementById("footer_form");[l,r,d,c,a].forEach(l=>{l.addEventListener("submit",r=>{r.preventDefault(),l.appendChild(t);const h=l.querySelector("input[type=checkbox]");if(h&&!h.checked)return l.appendChild(t),t.textContent="ПОДТВЕРДТИТЕ ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ!",!1;if(l===a&&!s.checked&&!i.checked)return t.textContent="Какой Клуб Вы выбираете?",!1;const u=new FormData(l);let m={};u.forEach((e,t)=>{m[t]=e}),p(m).then(t=>{if(200!==t.status)throw new Error("status network not 200");e.style.display="block"}).then(()=>{l.reset(),o&&(o.textContent="2999"),t.style.display="none",l!==d&&l!==c&&l!==a&&(l.style.display="none"),e.addEventListener("click",t=>{let o=t.target;e.style.display="none",o.matches(".form-content")?(o=o.matches(".close-btn"),o&&(e.style.display="none",n.forEach(e=>{e.style.display="none"}))):n.forEach(e=>{e.style.display="none"})})}).catch(e=>{t.textContent="Error send......",console.error(e)})}),l.addEventListener("input",e=>{const t=e.target,n=document.querySelectorAll("input[type=tel]"),o=document.querySelectorAll('input[placeholder="Ваше имя..."]'),s=(e,n,o)=>{t.matches(n)&&e.forEach(e=>{e.addEventListener("change",()=>{e.value!=e.value.match(o)?(e.value="",e.style.border="2px solid red"):e.style.border="none"})})};s(n,"input[type=tel]",/^\+?[78]\d{10}$/),s(o,'input[placeholder="Ваше имя..."]',/^[а-яА-ЯёЁ0-9\s]+$/)})});const p=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var d=(e,t,n)=>{let o,s,i=0;t.forEach(e=>{s=document.createElement("li"),s.className="dot",s.innerHTML="<button></button>",n.appendChild(s)});const l=document.querySelectorAll(".dot");l[0].classList.add("active"),t[0].style.display="block";const r=(e,t,n,o)=>{e[t].classList.remove(n),o&&(e[t].style.display=o)},d=(e,t,n,o)=>{e[t].classList.add(n),o&&(e[t].style.display=o)},c=()=>{r(t,i,"active","none"),r(l,i,"active"),i++,i>=t.length&&(i=0),d(t,i,"active","block"),d(l,i,"active")},a=(e=3e3)=>{o=setInterval(c,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".slider-dots, .slider-arrow")&&(r(t,i,"active","none"),r(l,i,"active"),n.matches(".slider-arrow.next")?i++:n.matches(".slider-arrow.prev")?i--:n.matches(".dot")&&l.forEach((e,t)=>{e===n&&(i=t)}),i>=t.length&&(i=0),i<0&&(i=t.length-1),d(t,i,"active","block"),d(l,i,"active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider-dots")||e.target.matches(".slider-arrow"))&&clearInterval(o)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider-dots")||e.target.matches(".slider-arrow"))&&a()}),a()};var c=class{constructor({main:e,wrap:t,position:n=0,prev:o,next:s,slidesToShow:i=3,infinity:l=!1,responsive:r=[]}){e&&t&&(this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(s),this.prev=document.querySelector(o),this.slidesToShow=i,this.option={position:n,infinity:l,slideWidth:Math.floor(100/this.slidesToShow)},this.responsive=r)}init(){this.addClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responsiveInit()}addClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(let e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel");e||(e=document.createElement("style"),e.id="sliderCarousel"),e.textContent=`\n            .glo-slider {\n                overflow: hidden;\n                position: relative;\n            }\n            .glo-slider__wrap {\n                display: flex;\n                transition: transform 0.5s;\n                will-change: transform;\n            }\n            .glo-slider__item {\n                display: flex;\n                align-items: center;\n                flex: 0 0 ${this.option.slideWidth}%;\n                margin: 0 !important;\n            }\n        `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.option.infinity||this.option.position>0)&&(--this.option.position,this.option.position<0&&(this.option.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.option.position*this.option.slideWidth}%)`)}nextSlider(){(this.option.infinity||this.option.position<this.slides.length-this.slidesToShow)&&(++this.option.position,this.option.position>this.slides.length-this.slidesToShow&&(this.option.position=0),this.wrap.style.transform=`translateX(-${this.option.position*this.option.slideWidth}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n            .glo-slider__prev,\n            .glo-slider__next {\n                position: absolute;\n                top: 25px;\n                margin: 0 10px;\n                border: 15px solid transparent;\n                outline: none;\n                background-color: transparent;\n            }\n            .glo-slider__prev {\n                border-right-color: #ffd11a;\n                left: -30px;\n            }\n            .glo-slider__next {\n                border-left-color: #ffd11a;\n                right: -30px;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background-color: transparent;\n            }\n        ",document.head.appendChild(e)}responsiveInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,this.option.slideWidth=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.option.slideWidth=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}};var a=()=>{const e=e=>{e.style.display="block"};(()=>{document.querySelector(".club-select");const t=document.querySelector(".clubs-list").querySelector("ul");document.body.addEventListener("click",n=>{let o=n.target;o.closest(".club-select")?e(t):"block"!==t.style.display||o.classList.contains("club-list")||(t.style.display="none")})})();(()=>{const t=document.getElementById("free_visit_form");document.body.addEventListener("click",n=>{let o=n.target;o.closest(".free-visit")?e(t):(o=o.closest(".form-content"),o||(t.style.display="none"))})})();(()=>{const e=document.querySelector(".popup-menu");document.body.addEventListener("click",t=>{let n=t.target;n.closest(".menu-button")?e.style.display="flex":(n=n.closest(".form-content"),e.style.display="none",n||(e.style.display="none"))})})()};(()=>{const e=document.querySelector(".head .callback-btn"),t=document.querySelector("#callback_form");e.addEventListener("click",()=>{t.style.display="block"}),t.addEventListener("click",e=>{(e.target.matches(".close_icon")||e.target.matches(".overlay"))&&(t.style.display="none")})})(),o(),s(),i(),l(),r();const p=document.querySelector(".main-slider"),h=p.querySelectorAll(".slide"),u=p.querySelector(".slider-dots"),m=document.querySelector(".gallery-slider"),y=m.querySelectorAll(".slide"),f=m.querySelector(".slider-dots");d(p,h,u),d(m,y,f),a(),new c({main:"#services .wrapper",wrap:".services-slider",prev:"#slide-prev",next:"#slide-next",infinity:!0,slidesToShow:5,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()}]);