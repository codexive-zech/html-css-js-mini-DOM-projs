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
