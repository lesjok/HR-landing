import { anchorAdvantages, anchorAbout, anchorOffers } from "./constants";

export function srollToAnchors() {
  anchorAdvantages.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionID = anchorAdvantages.getAttribute('href');
console.log(sectionID)
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });


  anchorAbout.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionID = anchorAbout.getAttribute('href');
    console.log(sectionID)
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });

  anchorOffers.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionID = anchorOffers.getAttribute('href');
    console.log(sectionID)
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}