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
const futureDate = new Date(2022, 9, 17, 23, 30, 00);

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
giveaway.textContent = `giveaway ends on ${getDay}, ${getDate} ${getMonth} ${getYear}, ${getHour}:${getMinute}pm`;
