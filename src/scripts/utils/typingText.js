import { headerLine } from '../utils/constants'
import { headerTexts } from '../utils/constants'
let line = 0;
let count = 0;
let result = '';

export function typeLine() {
  let interval = setTimeout(
    () => {
      result += headerTexts[line][count]
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
    }, 180)
}

typeLine();
