// Declaring and Defining actions and effects
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  // Getting the precised data id of a particular button that is clicked inside of about
  const id = e.target.dataset.id;
  if (id) {
    // Looping through all the button
    btns.forEach(function (btn) {
      // removing the active class
      btn.classList.remove('active');
      //   adding the active class to the clicked button via it's dataset (e.target)
      e.target.classList.add('active');
    });
    // Loop through all articles, hide all other article
    articles.forEach(function (article) {
      // removing the active class from the clicked article
      article.classList.remove('active');
    });
    // Getting each article by it marching id
    const element = document.getElementById(id);
    // Adding the class of active to each article
    element.classList.add('active');
  }
});
