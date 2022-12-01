import './index.css';

import { select, selectProgram } from '../scripts/utils/offers-select';

import {
  quizContainer,
  sliderLeftBtn,
  sliderLRightBtn,
  burgerButton,
  headerNav,
  quizReviewerBtn,
  quizTeacherBtn,
  formSteps,
  multiStepForm,
  formConfig,
  peopleRole,
  peopleContainer,
  peopleDirection,
  peopleDirectionContainer,
  btnsRight, 
  btnsLeft 
} from '../scripts/utils/constants';

import { getCoordinate, scrollCards } from '../scripts/utils/slider';
import { typingText } from '../scripts/utils/typingText';
import { clickCount, quiz } from '../scripts/utils/quiz';
import { scrollUp } from '../scripts/utils/scrollUp'
import { srollToAnchors } from '../scripts/utils/srollToAnchors'
import { accordeon } from '../scripts/utils/accordeon';
import { openPopup } from '../scripts/utils/openPopup';

document.getElementById('davaToday').valueAsDate = new Date();

document.querySelector('.form__close').addEventListener('click', () => {
  document.querySelector('.form').classList.remove('form_opened')
})


document.addEventListener('DOMContentLoaded', scrollUp);

openPopup();
srollToAnchors();
accordeon();

btnsRight.forEach(item => {
  item.addEventListener('mousedown', () => {
    if (item.classList.contains('reviews__button_right_mob')) {
      scrollCards(340);
    } else {
      scrollCards(501);
    }
  })
});

btnsLeft.forEach(item => {
  item.addEventListener('mousedown', () => {
    if (item.classList.contains('reviews__button_left_mob')) {
      scrollCards(-340);
    } else {
      scrollCards(-501);
    }
  })
});

sliderLRightBtn.addEventListener('mousedown', () => {
  scrollCards(501);
});
sliderLeftBtn.addEventListener('mousedown', () => {
  scrollCards(-501);
});



quizTeacherBtn.addEventListener('click', quiz);
quizReviewerBtn.addEventListener('click', quiz);

if (clickCount > 5) {
  console.log('dont work')
  quizContainer.removeEventListener('click', quiz);
}


burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav_active');
});


let currentStep = Array.from(formSteps).findIndex(step => {
  return step.classList.contains("form__step_active")
});

const hideAnimation = () => {
  Array.from(formSteps).forEach(step => {
    step.addEventListener("animationend", e => {
      Array.from(formSteps)[currentStep].classList.remove("hide");
      e.target.classList.toggle("hide", !e.target.classList.contains("form__step_active"));
    });
  });
}

Array.from(formSteps).forEach(step => {
  step.addEventListener("animationend", e => {
    Array.from(formSteps)[currentStep].classList.remove("hide");
    e.target.classList.toggle("hide", !e.target.classList.contains("form__step_active"));
  });
});

const showCurrentStep = () => {
  //hideAnimation()
  Array.from(formSteps).forEach((step, index) => {
    step.classList.toggle("form__step_active", index === currentStep);
  });
  console.log(Array.from(formSteps)[currentStep])

};

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStepForm.addEventListener("click", e => {

  const inputs = [...Array.from(formSteps)[currentStep].querySelectorAll("input")]
  const allValid = inputs.every(input => input.checkValidity());

  if (e.target.matches("[data-next]") && allValid) {
    currentStep = 1;
    showCurrentStep()
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1
    showCurrentStep()
  }

})

const showErrorMark = (inputElement) => {
  const svgIcon = document.querySelector(`.${inputElement.id}-fail`);
  svgIcon.classList.add('active');
}

const hideErrorMark = (inputElement) => {
  const svgIcon = document.querySelector(`.${inputElement.id}-fail`);
  svgIcon.classList.remove('active');
}

const showSuccessMark = (inputElement) => {
  const svgIcon = document.querySelector(`.${inputElement.id}-success`);
  svgIcon.classList.add('active');
}

const hideSuccessMark = (inputElement) => {
  const svgIcon = document.querySelector(`.${inputElement.id}-success`);
  svgIcon.classList.remove('active');
}

function showErrorMessage(formElement, inputElement, config) {
  const error = formElement.querySelector(`.${inputElement.id}-error`);
  error.classList.add(config.formErrorClass);
  error.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideErrorMessage(formElement, inputElement, config) {
  const error = formElement.querySelector(`.${inputElement.id}-error`);
  error.classList.remove(config.formErrorClass);
  error.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function hasValidInput(inputlist) {
  return inputlist.some(input => {
    return !input.validity.valid
  })
}

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, config);
    showErrorMark(inputElement);
    hideSuccessMark(inputElement);
    inputElement.classList.remove(config.inputSuccessClass);
  } else {
    hideErrorMessage(formElement, inputElement, config);
    hideErrorMark(inputElement);
    showSuccessMark(inputElement);
    inputElement.classList.add(config.inputSuccessClass);
  }
}

function getInputListAndSubmitButton(formElement, config) {
  const inputlist = Array.from(formElement.querySelectorAll(config.inputSelector));
  return inputlist
}

function resetImputsErrorMessage(formElement, config) {
  const errors = Array.from(formElement.querySelectorAll(config.formErrorMessageSelector));
  errors.forEach(error => {
    error.classList.remove(config.formErrorClass);
  });

  getInputListAndSubmitButton(formElement, config);

  getInputListAndSubmitButton(formElement, config).forEach(input => {
    input.classList.remove(config.inputErrorClass);
  })
}

function setEvenetListeners(formElement, config) {
  getInputListAndSubmitButton(formElement, config);
  getInputListAndSubmitButton(formElement, config).forEach(input => {
    input.addEventListener('blur', function () {
      checkInputValidity(formElement, input, config);
    });
  });
}

function enableFormValidation(config) {
  const form = document.querySelector(config.formSelector);
  setEvenetListeners(form, config);
}

enableFormValidation(formConfig);


peopleRole.addEventListener('click', () => {
  peopleContainer.classList.toggle('active')
})

peopleDirection.addEventListener('click', () => {
  peopleDirectionContainer.classList.toggle('active')
})