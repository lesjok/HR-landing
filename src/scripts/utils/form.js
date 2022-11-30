// import {formSteps, multiStepForm} from './constants';
//
// console.log(formSteps)
// let currentStep = Array.from(formSteps).findIndex(step => {
//   return step.classList.contains("form__step_active")
// });
//
// const showCurrentStep = () => {
//   formSteps.forEach((step, index) => {
//     step.classList.toggle("active", index === currentStep);
//   });
// };
//
// if (currentStep < 0) {
//   currentStep = 0;
//   showCurrentStep();
// }
//
// multiStepForm.addEventListener("click", e => {
//   let incrementor
//   if (e.target.matches("[data-next]")) {
//     incrementor = 1
//   } else if (e.target.matches("[data-previous]")) {
//     incrementor = -1
//   }
//
//   if (incrementor == null) return
//
//   const inputs = [...Array.from(formSteps[currentStep]).querySelectorAll("input")]
//   const allValid = inputs.every(input => input.reportValidity())
//   if (allValid) {
//     currentStep += incrementor
//     showCurrentStep()
//   }
// })
//
// formSteps.forEach(step => {
//   step.addEventListener("animationend", e => {
//     formSteps[currentStep].classList.remove("hide");
//     e.target.classList.toggle("hide", !e.target.classList.contains("form__step_active"));
//   });
// });