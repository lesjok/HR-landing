import {
  modal, modalContent,
  quizAnswers,
  quizQuestionsCount,
  quizReviewerBtn, 
  quizRole,
  quizTeacherBtn
} from './constants';

let teacherCount = 0;
let reviewerCount = 0;
export let clickCount = 0

export const quiz = (evt) => {

  if (Number(quizQuestionsCount.textContent) < 6) {
    clickCount++
    if ( Number(quizQuestionsCount.textContent) < 5) {
      quizQuestionsCount.textContent = Number(quizQuestionsCount.textContent) + 1;
    }

    if (evt.target.classList.contains('quiz__teacher')) {
      teacherCount += 1;
      quizTeacherBtn.innerHTML = quizAnswers.teacher[quizQuestionsCount.textContent - 1];
      quizReviewerBtn.innerHTML = quizAnswers.reviwer[quizQuestionsCount.textContent - 1];
    }
    if (evt.target.classList.contains('quiz__reviewer')) {
      reviewerCount += 1;
      quizReviewerBtn.innerHTML = quizAnswers.reviwer[quizQuestionsCount.textContent - 1];
      quizTeacherBtn.innerHTML = quizAnswers.teacher[quizQuestionsCount.textContent - 1];
    }

    if (clickCount === 5) {

      if (teacherCount > reviewerCount) {
        quizRole.innerHTML = `<div class="quiz__wrapper">
        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_teacher">наставника!</span> </h3>
            <button class="button quiz__result">
      Перейти к&nbsp;предложениям
    </button></div>`
      } else {
        quizRole.innerHTML = `
<div class="quiz__wrapper">
        <h3 class="quiz__role">Вам подходит роль <span class="quiz__role_reviewer">ревьюера!</span></h3>
            <button class="button quiz__result">
      Перейти к&nbsp;предложениям
        </button></div>
`
      }
    }
  }

}



