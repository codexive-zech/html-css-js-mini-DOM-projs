// Declaring and Defining actions and effects
const navToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const navClose = document.querySelector('.close');

// Listening to a click on the toggle bar to show the sidebar
navToggle.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});

// Listening to a click on the close bar to remove the sidebar
navClose.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
