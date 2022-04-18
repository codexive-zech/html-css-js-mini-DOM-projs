const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

// Listening to click event
btn.addEventListener('click', function () {
  // checking to make sure the button does not have a class of side
  if (!btn.classList.contains('slide')) {
    //   add the class to it
    btn.classList.add('slide');
    // pause the video
    video.pause();
  } else {
    //   remove the class
    btn.classList.remove('slide');
    // play the video
    video.play();
  }
});

// Removing the Preloader on load event
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});
