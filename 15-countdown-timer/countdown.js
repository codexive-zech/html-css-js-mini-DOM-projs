// Array for Months(they are 0 index based)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Array for Weekdays(they are 0 index based)
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Declaring and Defining actions and effects
const giveaway = document.querySelector('.giveaway');

// displaying the future date to end countdown
const futureDate = new Date(2022, 6, 17, 17, 30, 00);

// Future date extraction begin
// getting the exact Year the countdown end
const getYear = futureDate.getFullYear();
// getting the exact hour the countdown end
const getHour = futureDate.getHours();
// getting the exact minutes the countdown end
const getMinute = futureDate.getMinutes();
// getting the exact Date the countdown end
const getDate = futureDate.getDate();
// getting the exact Month the countdown end
let getMonth = futureDate.getMonth();
// reassign the value and check the month array to get the index
getMonth = months[getMonth];
// getting the exact Day the countdown end
let getDay = futureDate.getDay();
// reassign the value and check the weekdays array to get the index
getDay = weekdays[getDay];
// display the giveaway end time dynamically on the HTML
giveaway.textContent = `giveaway ends on ${getDay}, ${getDate} ${getMonth} ${getYear}, ${getHour}:${getMinute}pm`;

// getting the exact Time the countdown end
const futureTime = futureDate.getTime();
// Get the Future Date and Current Date & handle the subtraction

function getRemainingCountdownTime() {
  // Getting the current local time
  const todayTime = new Date().getTime();
  // getting the milliseconds value between both time
  const calculatedTime = futureTime - todayTime;
  //   How millisecond work
  /*1s = 1000,
    1m = 60s,
    1h = 60m,
    1d = 24h */

  // calculating how many millisecond is in one day (24hr)
  const oneDay = 24 * 60 * 60 * 1000;
  // calculating how many millisecond is in one hour (60m)
  const oneHour = 60 * 60 * 1000;
  // calculating how many millisecond is in one minutes (60s)
  const oneMinute = 60 * 1000;

  //  calculate how many days we have left
  let days = calculatedTime / oneDay;
  //   making the value a whole number
  days = Math.floor(days);
  // calculating how many hours are left. First getting the left over days and dividing by one hour in millisecond
  let hour = (calculatedTime % oneDay) / oneHour;
  //   making the value a whole number
  hour = Math.floor(hour);
  // calculating how many minutes are left. First getting the left over hours and dividing by one minutes in millisecond
  let minutes = (calculatedTime % oneHour) / oneMinute;
  //   making the value a whole number
  minutes = Math.floor(minutes);
  // calculating how many seconds are left. First getting the left over minutes and dividing by one seconds in millisecond
  let seconds = (calculatedTime % oneMinute) / 1000;
  //   making the value a whole number
  seconds = Math.floor(seconds);

  // Declaring and Defining actions and effects
  const items = document.querySelectorAll('.deadline-format h4');
  // setting the millisecond value for days, hours, minutes, seconds into an array
  const millisecondValue = [days, hour, minutes, seconds];

  // Function formatting the time
  function formatTime(item) {
    // checking if the display index from millisecond array is less than 10
    if (item < 10) {
      // Add reassign item by adding 0 before the item (millisecond array index)
      return (item = `0${item}`);
    }
    // display the original item value from the (millisecond array index)
    return item;
  }

  //   iterating over each millisecond value from the html (deadline-format h4)and add the value
  items.forEach(function (item, index) {
    // dynamically displaying all millisecond in the HTML via it array and invoking the formatTime function
    item.innerHTML = formatTime(millisecondValue[index]);
  });

  // checking to see if the calculatedTime(sub of future time from today time) is less than 0
  if (calculatedTime < 0) {
    // clearing out the secondsCountdown before it get to it
    clearInterval(secondsCountdown);
    // Declaring and Defining actions and effects
    const deadline = document.querySelector('.deadline');
    // Dynamically display this in the HTML when the calculated Time is less than 0
    deadline.innerHTML = `<h4 class="expired">Sorry, Giveaway has Expired</h4>`;
  }
}
// dynamically making the HTML display the countdown value in second
let secondsCountdown = setInterval(getRemainingCountdownTime, 1000);
// Invoke the function after timer interval
getRemainingCountdownTime();
