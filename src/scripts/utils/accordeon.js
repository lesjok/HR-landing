import { faqButtons } from './constants';

export const accordeon = () => {
  for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener('click', () => {
    faqButtons[i].parentElement.nextElementSibling.classList.toggle('active');
    faqButtons[i].firstElementChild.classList.toggle('hidden');
    faqButtons[i].lastElementChild.classList.toggle('active');
    })
  }
}
accordeon();