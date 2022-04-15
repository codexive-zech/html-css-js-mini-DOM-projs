// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// Declaring and Defining actions and effects
const img = document.querySelector('.img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReview = 0;

function showPersonReview() {
  // Retrieving a particular reviews index in the review array object [{}]
  const item = reviews[currentReview];
  //   Dynamically adding content available in the array object [{}]
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Review should load immediately the webpage display
window.addEventListener('DOMContentLoaded', function () {
  showPersonReview();
});

// clicking on the next button
nextBtn.addEventListener('click', function () {
  // increasing the current review forward
  currentReview++;
  //   checking the reviews length and reassigning the current review
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showPersonReview();
});

// clicking on the previous button
prevBtn.addEventListener('click', function () {
  // decrease the current review backward
  currentReview--;
  // checking the current reviews isn't 0 and assigning the current review forward
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showPersonReview();
});

// Getting random review
randomBtn.addEventListener('click', function () {
  // assigning currentReview
  currentReview = Math.floor(Math.random() * reviews.length);
  showPersonReview();
});
