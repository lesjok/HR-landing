import {
  quizAnswers,
  quizContainer,
  quizQuestionNext,
  quizQuestionsCount,
  quizReviewerBtn,
  quizTeacherBtn
} from './constants';

const quizBtns = [quizTeacherBtn, quizReviewerBtn];

quizContainer.addEventListener('click', (evt) => {
  console.log(evt.target)
})


export const quiz = () => {
  let teacherCount = 0;
  let reviewerCount = 0;

  const handleCountQuestions = (item) => {
    quizQuestionsCount.textContent = Number(quizQuestionsCount.textContent) + 1;
    if (item.getAttribute('data-set') === 'teacher') {
      teacherCount += 1;
    } else {
      reviewerCount += 1;
    }
  }

  quizBtns.forEach(item => {
    console.log(item)
    item.addEventListener('click', handleCountQuestions);

    // if (quizQuestionsCount.textContent = 5) {
    //   item.removeEventListener('click', handleCountQuestions);
    // }
  });

  quizQuestionNext.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('clicked')
    quizQuestionsCount.textContent +=1;
    console.log(quizAnswers.teacher[1])
    console.log('btn', quizTeacherBtn)


      quizTeacherBtn.innerHTML = quizAnswers.teacher[2];
      quizReviewerBtn.innerHTML = quizAnswers.reviwer[2];

  });
}