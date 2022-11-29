import { sliderContainerOffers, sliderOffersLRightBtn, sliderOffersLeftBtn } from './constants';

export const scrollOffersCards = (offset) => {
  sliderContainerOffers.scrollLeft += offset;
}
sliderOffersLRightBtn.addEventListener('click', () => {
  scrollOffersCards(250);
});
sliderOffersLeftBtn.addEventListener('click', () => {
  scrollOffersCards(-250);
});