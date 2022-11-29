import { anchors } from "./constants";

export function srollToAnchors() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const sectionID = anchor.getAttribute('href')

      document.querySelector(sectionID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
}