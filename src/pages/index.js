import './index.css';

import {quizContainer, sliderLeftBtn, sliderLRightBtn} from '../scripts/utils/constants';
import { scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import {clickCount, quiz} from '../scripts/utils/quiz';


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

