import './index.css';
import { sliderLeftBtn, sliderLRightBtn } from '../scripts/utils/constants';
import { scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText'

sliderLRightBtn.addEventListener('click', () => {
  scrollCards(250);
});
sliderLeftBtn.addEventListener('click', () => {
  scrollCards(-250);
});

