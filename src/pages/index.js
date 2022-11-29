import './index.css';

import {quizContainer, sliderContainer, sliderLeftBtn, sliderLRightBtn} from '../scripts/utils/constants';
import {getCoordinate, scrollCards} from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import { clickCount, quiz } from '../scripts/utils/quiz';
import { scrollUp } from '../scripts/utils/scrollUp'
import {srollToAnchors} from '../scripts/utils/srollToAnchors'

document.addEventListener('DOMContentLoaded', scrollUp);

srollToAnchors();


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
