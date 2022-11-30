const offersCards = document.querySelectorAll('.offers__card');

export const filter = () => {
  document.querySelector('.offers__list').addEventListener('click', event => {
    let filterClass = event.target.dataset['f'];
    offersCards.forEach( elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass)) {
        elem.classList.add('hide');
      }
    })
  })
}
filter();