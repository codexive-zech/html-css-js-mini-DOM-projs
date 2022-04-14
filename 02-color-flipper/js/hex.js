const hexValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'E', 'F'];

const btn = document.querySelector('#btn');
const textColor = document.querySelector('.color');

btn.addEventListener('click', function () {
  // get the Hex color beginning
  let hexColor = '#';
  //   Loop through he array
  for (i = 0; i < 6; i++) {
    hexColor += hexValue[getRandomColorNumber()];
    document.body.style.backgroundColor = hexColor;
    textColor.textContent = hexColor;
  }
});

function getRandomColorNumber() {
  return Math.floor(Math.random() * hexValue.length);
}
