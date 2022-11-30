import { selectHeader, selectItem, offersButtons } from './constants';

export let select = function() {
  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });
  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
    let text = this.innerText;
    let select = this.closest('.offers__select');
    let currentText = select.querySelector('.offers__select_current');
    let bodyText=currentText.parentElement.nextElementSibling.querySelector('.offers__select-item');
    if(text === 'Для ревьюеров') {
      bodyText.innerText = 'Для наставников';
    } else {
      bodyText.innerText = 'Для ревьюеров';
    }
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.offers__select');
    let currentText = select.querySelector('.offers__select_current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
}
select();

export let selectProgram = function() {
  offersButtons.forEach(item => {
    item.addEventListener('click', () => {
      offersButtons.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    })
  })
}
selectProgram();
