import {formRoadSteps, formSteps, multiStepForm} from './constants';

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

  Array.from(formSteps).forEach((step, index) => {
    step.classList.toggle("form__step_active", index === currentStep);
  });
  Array.from(formRoadSteps).forEach((step, index) => {
    if (index === currentStep) {
      step.classList.add('active');
    }
    if (index < currentStep) {
      step.classList.add('valid');
    }
  })
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

const fixedPlaceholder = (formElement, inputElement) => {
  const placeholderElement = formElement.querySelector(`.${inputElement.id}-placeholder`);
  placeholderElement.classList.add('form__placeholder_fixed');
}

const unFixedPlaceholder = (formElement, inputElement) => {
  const placeholderElement = formElement.querySelector(`.${inputElement.id}-placeholder`);
  placeholderElement.classList.remove('form__placeholder_fixed');
}

const isEmptyInput = (formElement, inputElement) => {
  !inputElement.value.length >= 1 ? unFixedPlaceholder(formElement, inputElement) : fixedPlaceholder(formElement, inputElement)
}

const setPlaceholders = (formElement, config) => {
  const inputlist = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputlist.forEach(elem => {
    elem.addEventListener('input', () => {
      isEmptyInput(formElement, elem);
    });
  });
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
  setPlaceholders(formElement, config)
}

export function enableFormValidation(config) {
  const form = document.querySelector(config.formSelector);
  setEvenetListeners(form, config);
}