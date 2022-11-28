import './index.css';

import {quizContainer, sliderLeftBtn, sliderLRightBtn} from '../scripts/utils/constants';




// начало кода печатающегося хэдэра

const headerTexts = [
  'в программировании',
  'в анализе данных',
  'в менеджменте',
  'в маркетинге',
  'в дизайне',
]

const headerLine = document.querySelector('.hero__title_dynamic')

// // function wait() {
// //   return new Promise(async (resolve, reject) => {
// //     setTimeout(() => {
// //       resolve();
// //     }, 5000);
// //   });
// // }

// // async function loop() {
// //   for (const a of headerTexts) {
// //     headerLine.textContent = typeLine(a);
// //     // await wait();
// //   }
// //   loop();
// // }

// // loop();



let line = 0;
let count = 0;
let result = '';
function typeLine() {
  let interval = setTimeout(
    () => {
      result += headerTexts[line][count]
      console.log(result)
      headerLine.textContent = result + '|';
      count++;

      if (count >= headerTexts[line].length) {


        result = '';
        count = 0;
        line++;


        if (line == headerTexts.length) {
          line = 0
        }
      }
      typeLine();
    }, 100)
}

typeLine();

// конец кода




import {scrollCards} from '../scripts/utils/slider';
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

