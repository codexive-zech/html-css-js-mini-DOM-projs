// Traversing the DOM method
// const questionBtn = document.querySelectorAll('.question-btn');

// questionBtn.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

//Using Selector inside the Element
const questions = document.querySelectorAll('.question');
// Looping through all the accordion articles
questions.forEach(function (question) {
  // Getting the accordion Button
  const questionBtn = question.querySelector('.question-btn');
  //   Adding a click event so as to display on click
  questionBtn.addEventListener('click', function () {
    //   Looping through each question article again
    questions.forEach(function (questionItem) {
      // checking to make sure the clicked question isn't the one one
      if (questionItem !== question) {
        //   removing the class if a different question is clicked in the question article list
        questionItem.classList.remove('show-text');
      }
    });
    // Adding the class to display feedback dynamically
    question.classList.toggle('show-text');
  });
});
