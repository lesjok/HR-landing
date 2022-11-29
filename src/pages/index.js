import './index.css';

import {quizContainer, sliderLeftBtn, sliderLRightBtn} from '../scripts/utils/constants';
import { scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import {clickCount, quiz} from '../scripts/utils/quiz';
import { accordeon } from '../scripts/utils/accordeon';



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

