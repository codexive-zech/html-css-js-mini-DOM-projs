const date = document.querySelector('#date');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

// setup dynamic date
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function () {
  // can be used if you know the exact value for the nav link
  //   linksContainer.classList.toggle('show-links');

  //   Getting the exact height of the Link parent element (link container) using GetBoundingClientRect
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  //   Getting the exact height of the nav Link using GetBoundingClientRect
  const linkHeight = links.getBoundingClientRect().height;
  //   checking to see if the height of the link parent element (link container) is 0
  if (linksContainerHeight === 0) {
    //   Then increase the height of the container by the nav link height via getBoundingClientRect
    linksContainer.style.height = `${linkHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.querySelector('#nav');
const backTopLink = document.querySelector('.top-link');

// Listening for a scroll event on the window
window.addEventListener('scroll', function () {
  // Looking for the vertical height scrolled to in the document
  const scrollHeight = window.pageYOffset;
  // Getting the Height of the navbar
  const navbarHeight = navbar.getBoundingClientRect().height;
  // checking if the height from the vertical scroll is bigger than the navbar height
  if (scrollHeight > navbarHeight) {
    // Adding the class for fixed top navbar
    navbar.classList.add('fixed-nav');
  } else {
    // removing the class for fixed top navbar
    navbar.classList.remove('fixed-nav');
  }

  // Checking to see if the vertical scroll height is bigger than 300
  if (scrollHeight > 300) {
    // Adding the class for back to top link
    backTopLink.classList.add('show-link');
  } else {
    // removing the class for back to top link
    backTopLink.classList.remove('show-link');
  }
});
