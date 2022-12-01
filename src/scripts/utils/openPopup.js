import {CTAbuttons, form, formConfig} from './constants'
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
  document.addEventListener('keydown',closePopupByEsc);
}

