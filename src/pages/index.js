import './index.css';
import { sliderLeftBtn, sliderLRightBtn} from '../scripts/utils/constants';
import {scrollCards} from '../scripts/utils/slider';
import {quiz} from '../scripts/utils/quiz';

sliderLRightBtn.addEventListener('click', () => {
  scrollCards(250);
});
sliderLeftBtn.addEventListener('click', () => {
  scrollCards(-250);
});

quiz();