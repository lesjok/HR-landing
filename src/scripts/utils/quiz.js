import {
  quizAnswers, quizProgress, quizProgressSteps,
  quizReviewerBtn,
  quizRole,
  quizTeacherBtn
} from './constants';

let teacherCount = 0;
let reviewerCount = 0;
export let clickCount = 0
let quizQuestionsCount = 0;

export const quiz = (evt) => {

  quizProgressSteps.forEach((elem, index) => {
    if (index === quizQuestionsCount) {
      elem.classList.add('quiz__step_active');
    }
  });

  if (evt.target.classList.contains('quiz__teacher')) {
    teacherCount += 1;
    quizTeacherBtn.innerHTML = quizAnswers.teacher[quizQuestionsCount + 1];
    quizReviewerBtn.innerHTML = quizAnswers.reviwer[quizQuestionsCount + 1];
    quizQuestionsCount++;
    clickCount++
  }
  if (evt.target.classList.contains('quiz__reviewer')) {
    reviewerCount += 1;
    quizReviewerBtn.innerHTML = quizAnswers.reviwer[quizQuestionsCount + 1];
    quizTeacherBtn.innerHTML = quizAnswers.teacher[quizQuestionsCount + 1];
    quizQuestionsCount++;
    clickCount++
  }

  if (clickCount === 5) {

    if (teacherCount > reviewerCount) {
      quizRole.innerHTML = `<div class="quiz__wrapper">
        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_teacher">наставника!</span> </h3>
            <button class="button quiz__result cta_button">
      Перейти к&nbsp;предложениям
    </button></div>`
      document.querySelector('.quiz__result').addEventListener('click', () => {
        document.querySelector('.form').classList.add('form_opened')
      })
    } else {
      quizRole.innerHTML = `
<div class="quiz__wrapper">
        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_reviewer">ревьюера!</span></h3>
            <button class="button quiz__result cta_button">
      Перейти к&nbsp;предложениям
        </button></div>`;
      document.querySelector('.quiz__result').addEventListener('click', () => {
        document.querySelector('.form').classList.add('form_opened')
      })
    }
  }

}
