// Count initial value
let count = 0;

// Get HTML Document for manipulation
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Looping through all the buttons
btns.forEach(function (btn) {
  // listen to the click of the button
  btn.addEventListener('click', function (e) {
    //   getting the class of the click button
    const getBtnClass = e.currentTarget.classList;
    if (getBtnClass.contains('increase')) {
      count++;
    } else if (getBtnClass.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
