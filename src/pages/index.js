import './index.css';

import { select, selectProgram } from '../scripts/utils/offers-select';

import { quizContainer, sliderLeftBtn, sliderLRightBtn, burgerButton, headerNav } from '../scripts/utils/constants';
import { getCoordinate, scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import { clickCount, quiz } from '../scripts/utils/quiz';
import { scrollUp } from '../scripts/utils/scrollUp'
import { srollToAnchors } from '../scripts/utils/srollToAnchors'
import { accordeon } from '../scripts/utils/accordeon';

import { scrollOffersCards } from '../scripts/utils/offers-slider';

document.addEventListener('DOMContentLoaded', scrollUp);

srollToAnchors();
accordeon()

sliderLRightBtn.addEventListener('mousedown', () => {
  scrollCards(250);
});
sliderLeftBtn.addEventListener('mousedown', () => {
  scrollCards(-250);
});



quizContainer.addEventListener('click', quiz);

if (clickCount > 5) {
  console.log('dont work')
  quizContainer.removeEventListener('click', quiz);
}


burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav_active');
});

console.log(burgerButton)
console.log(headerNav)

