(()=>{"use strict";var e=document.querySelector(".reviews__button_left"),t=document.querySelector(".reviews__button_right"),r=document.querySelector(".reviews__cards"),n=document.querySelector("#advantagesAnc"),o=document.querySelector("#aboutAnc"),c=document.querySelector("#offersAnc"),s=document.querySelector(".hero__title_dynamic"),i=["в программировании","в анализе данных","в менеджменте","в маркетинге","в дизайне"],l=document.querySelector(".quiz"),a=document.querySelector(".quiz__answer"),u=(document.querySelector(".quiz__button"),document.querySelector(".quiz__result"),document.querySelector(".quiz__teacher")),d=document.querySelector(".quiz__reviewer"),f=document.querySelector(".quiz__answers"),m={reviwer:["Мне больше нравится расписывать проблемные места в дизайне, чем проговаривать их студенту. Так мне проще донести мысль.","Готов общаться только на&nbsp;тему дизайна и&nbsp;профессионального развития.","Проверить макет, дать рекомендации и&nbsp;оценить работу&nbsp;&mdash; зачет/незачет.","Оставлять комментарии в&nbsp;проекте студентов, на&nbsp;что стоит обратить внимание, какие статьи почитать и&nbsp;т.д.","Хочется довести каждый проект студента до&nbsp;уровня портфолио&nbsp;и, если понадобится, дать несколько попыток сделать работу лучше."],teacher:["Лучше обсудить макет при онлайн-встрече. В&nbsp;добавок послушать интересные истории студентов и&nbsp;рассказать свои.","Хочется больше знать о&nbsp;студентах. Узнавать, чем интересуются помимио дизайна, какие фильмы смотрят и&nbsp;т.п.","Мне хочется быть в&nbsp;постоянной комуникации со&nbsp;студентами, проводить вебинары, общаться в&nbsp;чатах.","Проводить воркшопы для студентов. Рассказывать про фигму, как ей&nbsp;пользоваться и&nbsp;какие возможности в&nbsp;ней есть.","Мне, как состоявшемуся дизайнеру хочется объяснять студентам, как использовать полученные знания в&nbsp;реальной работе"]},_=(document.querySelector(".modal"),document.querySelector(".modal__content"),document.querySelector(".header__burger-icon")),v=document.querySelector(".header__nav"),p=document.querySelectorAll(".faq__btn"),y=document.querySelectorAll(".offers__select-header"),q=document.querySelectorAll(".offers__select-item"),S=document.querySelectorAll(".offers__item"),b=(document.querySelector(".offers__cards"),document.querySelector(".offers__slider-btn_left"),document.querySelector(".offers__slider-btn_right"),document.querySelector("[data-multi-step]")),L=b.querySelectorAll("[data-step]"),h=document.querySelector(".form__input_type_role"),g=document.querySelector(".form__list_role"),E=document.querySelector(".form__input_type_direction"),A=document.querySelector(".form__list_direction");!function(){function e(){this.parentElement.classList.toggle("is-active");var e=this.innerText;this.closest(".offers__select").querySelector(".offers__select_current").parentElement.nextElementSibling.querySelector(".offers__select-item").innerText="Для ревьюеров"===e?"Для наставников":"Для ревьюеров"}function t(){var e=this.innerText,t=this.closest(".offers__select");t.querySelector(".offers__select_current").innerText=e,t.classList.remove("is-active")}y.forEach((function(t){t.addEventListener("click",e)})),q.forEach((function(e){e.addEventListener("click",t)}))}(),S.forEach((function(e){e.addEventListener("click",(function(){S.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active")}))}));var w=function(e){r.scrollLeft+=e},C=0,k=0,x="";!function e(){setTimeout((function(){x+=i[C][k],s.textContent=x+"|",++k>=i[C].length&&(x="",k=0,++C==i.length&&(C=0)),e()}),180)}();var z=0,T=0,M=0,I=function(e){Number(a.textContent)<6&&(M++,Number(a.textContent)<5&&(a.textContent=Number(a.textContent)+1),e.target.classList.contains("quiz__teacher")&&(z+=1,u.innerHTML=m.teacher[a.textContent-1],d.innerHTML=m.reviwer[a.textContent-1]),e.target.classList.contains("quiz__reviewer")&&(T+=1,d.innerHTML=m.reviwer[a.textContent-1],u.innerHTML=m.teacher[a.textContent-1]),5===M&&(f.innerHTML=z>T?'<div class="quiz__wrapper">\n        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_teacher">наставника!</span> </h3>\n            <button class="button quiz__result">\n      Перейти к&nbsp;предложениям\n    </button></div>':'\n<div class="quiz__wrapper">\n        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_reviewer">ревьюера!</span></h3>\n            <button class="button quiz__result">\n      Перейти к&nbsp;предложениям\n        </button></div>\n'))},D=document.querySelectorAll(".offers__card");function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector(".offers__list").addEventListener("click",(function(e){var t=e.target.dataset.f;D.forEach((function(e){e.classList.remove("hide"),e.classList.contains(t)||e.classList.add("hide")}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){window.pageYOffset>100?e.classList.add("scroll-up_visible"):e.classList.remove("scroll-up_visible")})),e.onclick=function(e){e.preventDefault(),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:700,r=document.scrollingElement||document.documentElement,n=r.scrollTop,o=e-n,c=+new Date,s=function(e,t,r,n){return(e/=n/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t};!function i(){var l=+new Date-c;r.scrollTop=parseInt(s(l,n,o,t)),l<t?requestAnimationFrame(i):r.scrollTop=e}()}(0,400)}})),n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href");console.log(t),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"end"})})),o.addEventListener("click",(function(e){e.preventDefault();var t=o.getAttribute("href");console.log(t),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"end"})})),c.addEventListener("click",(function(e){e.preventDefault();var t=c.getAttribute("href");console.log(t),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"center"})})),function(){for(var e=function(e){p[e].addEventListener("click",(function(){p[e].parentElement.nextElementSibling.classList.toggle("active"),p[e].firstElementChild.classList.toggle("hidden"),p[e].lastElementChild.classList.toggle("active")}))},t=0;t<p.length;t++)e(t)}(),t.addEventListener("mousedown",(function(){w(501)})),e.addEventListener("mousedown",(function(){w(-501)})),u.addEventListener("click",I),d.addEventListener("click",I),M>5&&(console.log("dont work"),l.removeEventListener("click",I)),_.addEventListener("click",(function(){v.classList.toggle("header__nav_active")}));var O=Array.from(L).findIndex((function(e){return e.classList.contains("form__step_active")}));Array.from(L).forEach((function(e){e.addEventListener("animationend",(function(e){Array.from(L)[O].classList.remove("hide"),e.target.classList.toggle("hide",!e.target.classList.contains("form__step_active"))}))}));var V,j=function(){Array.from(L).forEach((function(e,t){e.classList.toggle("form__step_active",t===O)})),console.log(Array.from(L)[O])};function N(e,t){return Array.from(e.querySelectorAll(t.inputSelector))}O<0&&(O=0,j()),b.addEventListener("click",(function(e){var t,r=(t=Array.from(L)[O].querySelectorAll("input"),function(e){if(Array.isArray(e))return H(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).every((function(e){return e.checkValidity()}));e.target.matches("[data-next]")&&r?(O=1,j()):e.target.matches("[data-previous]")&&(O-=1,j())})),V={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",formErrorMessageSelector:".form__error-message",formErrorClass:"form__error-message_active",inputErrorClass:"form__input_error",inputSuccessClass:"form__input_success"},function(e,t){N(e,t),N(e,t).forEach((function(r){r.addEventListener("blur",(function(){!function(e,t,r){t.validity.valid?(function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove(r.formErrorClass),n.textContent="",t.classList.remove(r.inputErrorClass)}(e,t,r),function(e){document.querySelector(".".concat(e.id,"-fail")).classList.remove("active")}(t),function(e){document.querySelector(".".concat(e.id,"-success")).classList.add("active")}(t),t.classList.add(r.inputSuccessClass)):(function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.add(r.formErrorClass),n.textContent=t.validationMessage,t.classList.add(r.inputErrorClass)}(e,t,r),function(e){document.querySelector(".".concat(e.id,"-fail")).classList.add("active")}(t),function(e){document.querySelector(".".concat(e.id,"-success")).classList.remove("active")}(t),t.classList.remove(r.inputSuccessClass))}(e,r,t)}))}))}(document.querySelector(V.formSelector),V),h.addEventListener("click",(function(){g.classList.toggle("active")})),E.addEventListener("click",(function(){A.classList.toggle("active")}))})();
//# sourceMappingURL=main.js.map