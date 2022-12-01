import { CTAbuttons, shareButtons } from './constants';

export function openPopup() {
  for (let CTAbutton of CTAbuttons) {
    CTAbutton.addEventListener('click', () => {
      document.querySelector('.form').classList.add('form_opened')
    })
  }
}

export function openSharePopup() {
  for (let btn of shareButtons) {
    btn.addEventListener('click', () => {
      document.querySelector('.popup').classList.add('popup_opened')
    })
  }
}
