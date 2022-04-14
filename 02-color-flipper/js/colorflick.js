const colors = [
  'red',
  'orange',
  '#f15020',
  'rgba(133, 122, 200)',
  'gold',
  'yellow',
];

const btn = document.querySelector('#btn');
const bgColor = document.querySelector('.color');

btn.addEventListener('click', function () {
  // get the Random Color Index
  const randomColorIndex = getRandomColorNumber();
  //   style the body by the Random Color Index
  document.body.style.backgroundColor = colors[randomColorIndex];
  //   dynamically add the Random Color Index value
  bgColor.textContent = colors[randomColorIndex];
});

// Function getting the random number of the array
function getRandomColorNumber() {
  return Math.floor(Math.random() * colors.length);
}
