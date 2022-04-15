// Declaring and Defining actions and effects
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Listening on click on the toggle bar
navToggle.addEventListener('click', function () {
  // checking to see if the effect class is in HTML
  const checkNavClass = links.classList.contains('showLinks');
  if (checkNavClass) {
    // if the effect class is in HTML remove it
    links.classList.remove('showLinks');
  } else {
    // if the effect class is in HTML add it
    links.classList.add('showLinks');
  }
});

// straightforward mostly used pattern
// navToggle.addEventListener('click', function () {
//   links.classList.add('showLinks');
// });
