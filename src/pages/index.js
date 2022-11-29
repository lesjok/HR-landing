import './index.css';

import { quizContainer, sliderLeftBtn, sliderLRightBtn } from '../scripts/utils/constants';
import { scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import { accordeon } from '../scripts/utils/accordeon';
import { select, selectProgram } from '../scripts/utils/offers-select';

import { clickCount, quiz } from '../scripts/utils/quiz';
import { scrollUp } from '../scripts/utils/scrollUp'
import {srollToAnchors} from '../scripts/utils/srollToAnchors'

import { scrollOffersCards } from '../scripts/utils/offers-slider';

document.addEventListener('DOMContentLoaded', scrollUp);

srollToAnchors();



sliderLRightBtn.addEventListener('click', () => {
  scrollCards(250);
});
sliderLeftBtn.addEventListener('click', () => {
  scrollCards(-250);
});



quizContainer.addEventListener('click', quiz);

if (clickCount > 5) {
  console.log('dont work')
  quizContainer.removeEventListener('click', quiz);
}