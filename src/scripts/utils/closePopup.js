import {form} from './constants';

export const closePopup = () => {
  form.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('form_opened') || event.target.classList.contains('form__close')) {
      form.classList.remove('form_opened');
    }
  });
  document.removeEventListener('keydown',closePopupByEsc);
}

export const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
}