import './index.css';

import {
  quizContainer,
  sliderLeftBtn,
  sliderLRightBtn,
  burgerButton,
  headerNav,
  quizReviewerBtn,
  quizTeacherBtn,
  formSteps,
  multiStepForm,
  formConfig,
  peopleRole,
  peopleContainer,
  peopleDirection,
  peopleDirectionContainer,
  formRoadSteps,
  btnsRight,
  btnsLeft,
  closePopup
} from '../scripts/utils/constants';

import { getCoordinate, scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import { clickCount, quiz } from '../scripts/utils/quiz';
import { scrollUp } from '../scripts/utils/scrollUp'
import { srollToAnchors } from '../scripts/utils/srollToAnchors'
import { accordeon } from '../scripts/utils/accordeon';
import { openPopup, openSharePopup } from '../scripts/utils/openPopup';
import { filter } from '../scripts/utils/offers-filter';

import {  } from '../scripts/utils/constants';
import {enableFormValidation} from '../scripts/utils/form';
import { selectProgram } from '../scripts/utils/offers-select';

document.querySelector('.form__close').addEventListener('click', () => {
  document.querySelector('.form').classList.remove('form_opened')
})

document.addEventListener('DOMContentLoaded', scrollUp);

openPopup();
srollToAnchors();
accordeon();
openSharePopup();
selectProgram();

btnsRight.forEach(item => {
  item.addEventListener('mousedown', () => {
    scrollCards(330);
  })
});
btnsLeft.forEach(item => {
  item.addEventListener('mousedown', () => {
    scrollCards(-330);
  })
});

sliderLRightBtn.addEventListener('mousedown', () => {
  scrollCards(491);
});
sliderLeftBtn.addEventListener('mousedown', () => {
  scrollCards(-491);
});

quizTeacherBtn.addEventListener('click', quiz);
quizReviewerBtn.addEventListener('click', quiz);

if (clickCount > 5) {
  console.log('dont work')
  quizContainer.removeEventListener('click', quiz);
}

burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav_active');
});

enableFormValidation(formConfig);

peopleRole.addEventListener('click', () => {
  peopleContainer.classList.toggle('active');
 peopleRole.blur()
  peopleContainer.addEventListener('click', (evt) => {
    peopleRole.value = evt.target.textContent.trim();
  });
});

peopleDirection.addEventListener('click', () => {
  peopleDirectionContainer.classList.toggle('active');
peopleDirection.blur();
  peopleDirectionContainer.addEventListener('click', (evt) => {
    peopleDirection.value = evt.target.textContent.trim();
  });
});

document.getElementById('davaToday').valueAsDate = new Date();

closePopup.addEventListener('click', () => {
  document.querySelector('.popup').classList.remove('popup_opened');
});

document.querySelector('.share').addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText('https://lesjok.github.io/HR-landing/')
  .then(() => {
  })
  .catch((err) => {
    console.log('??????-???? ?????????? ???? ??????');
  })
})

