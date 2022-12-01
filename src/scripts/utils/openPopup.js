import {CTAbuttons, form, formConfig, shareButtons} from './constants'
import {resetImputsErrorMessage} from './form';
import {closePopupByEsc} from './closePopup';

export function openPopup() {
  for (let CTAbutton of CTAbuttons) {
    CTAbutton.addEventListener('click', () => {
      document.querySelector('.form').classList.add('form_opened');
      resetImputsErrorMessage(document.querySelector(formConfig.formSelector), formConfig);
      form.reset();
    })
  }
}

export function openSharePopup() {
  for (let btn of shareButtons) {
    btn.addEventListener('click', () => {
      document.querySelector('.popup').classList.add('popup_opened')
    })
 }
  document.addEventListener('keydown',closePopupByEsc);
}



