import { CTAbuttons } from './constants'

export function openPopup() {
  for (let CTAbutton of CTAbuttons) {
    CTAbutton.addEventListener('click', () => {
      document.querySelector('.form').classList.add('form_opened')
    })
  }
}