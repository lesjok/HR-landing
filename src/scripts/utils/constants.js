export const sliderLeftBtn = document.querySelector('.reviews__button_left');
export const sliderLRightBtn = document.querySelector('.reviews__button_right');
export const sliderContainer = document.querySelector('.reviews__cards');

export const anchorAdvantages = document.querySelector('#advantagesAnc');
export const anchorAbout = document.querySelector('#aboutAnc');
export const anchorOffers = document.querySelector('#offersAnc');

export const CTAbuttons = document.querySelectorAll('.cta_button');

export const headerLine = document.querySelector('.hero__title_dynamic');
export const headerTexts = [
  'в программировании',
  'в анализе данных',
  'в менеджменте',
  'в маркетинге',
  'в дизайне',
];

export const quizContainer = document.querySelector('.quiz');
export const quizQuestionsCount = document.querySelector('.quiz__answer');
export const quizQuestionNext = document.querySelector('.quiz__button');
export const quizResult = document.querySelector('.quiz__result');
export const quizTeacherBtn = document.querySelector('.quiz__teacher');
export const quizReviewerBtn = document.querySelector('.quiz__reviewer');
export const quizRole = document.querySelector('.quiz__answers');
export const quizAnswers = {
  reviwer: [
    'Мне больше нравится расписывать проблемные места в дизайне, чем проговаривать их студенту. Так мне проще' +
    ' донести мысль.',
    'Готов общаться только на&nbsp;тему дизайна и&nbsp;профессионального развития.',
    'Проверить макет, дать рекомендации и&nbsp;оценить работу&nbsp;&mdash; зачет/незачет.',
    'Оставлять комментарии в&nbsp;проекте студентов, на&nbsp;что стоит обратить внимание, какие статьи почитать' +
    ' и&nbsp;т.д.',
    'Хочется довести каждый проект студента до&nbsp;уровня портфолио&nbsp;и, если понадобится, дать несколько попыток сделать работу лучше.'
  ],
  teacher: [
    'Лучше обсудить макет при онлайн-встрече. В&nbsp;добавок послушать интересные истории студентов' +
    ' и&nbsp;рассказать свои.',
    'Хочется больше знать о&nbsp;студентах. Узнавать, чем интересуются помимио дизайна, какие фильмы смотрят' +
    ' и&nbsp;т.п.',
    'Мне хочется быть в&nbsp;постоянной комуникации со&nbsp;студентами, проводить вебинары, общаться в&nbsp;чатах.',
    'Проводить воркшопы для студентов. Рассказывать про фигму, как ей&nbsp;пользоваться и&nbsp;какие возможности' +
    ' в&nbsp;ней есть.',
    'Мне, как состоявшемуся дизайнеру хочется объяснять студентам, как использовать полученные знания в&nbsp;реальной работе'
  ]
};
export const modal = document.querySelector('.modal');
export const modalContent = document.querySelector('.modal__content');


export const burgerButton = document.querySelector('.header__burger-icon');
export const headerNav = document.querySelector('.header__nav');

export const faqButtons = document.querySelectorAll('.faq__btn');

export const selectHeader = document.querySelectorAll('.offers__select-header');
export const selectItem = document.querySelectorAll('.offers__select-item');

export const offersButtons = document.querySelectorAll('.offers__item');

export const sliderContainerOffers = document.querySelector('.offers__cards');
export const sliderOffersLeftBtn = document.querySelector('.offers__slider-btn_left');
export const sliderOffersLRightBtn = document.querySelector('.offers__slider-btn_right');

export const multiStepForm = document.querySelector("[data-multi-step]");
export const formSteps = multiStepForm.querySelectorAll("[data-step]");
export const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  //submitButtonDisabledClass: 'button_disabled',
  formErrorMessageSelector: '.form__error-message',
  formErrorClass: 'form__error-message_active',
  inputErrorClass: 'form__input_error',
  inputSuccessClass: 'form__input_success',
};

export const peopleRole = document.querySelector('.form__input_type_role');
export const peopleContainer = document.querySelector('.form__list_role');
export const peopleDirection = document.querySelector('.form__input_type_direction');
export const peopleDirectionContainer = document.querySelector('.form__list_direction');

export const quizProgress = document.querySelector('.quiz__progress');
export const quizProgressSteps = document.querySelectorAll('.quiz__step');
