const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'lunch',
    price: 22.99,
    img: './images/food.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: 'bison steak',
    category: 'shakes',
    price: 22.99,
    img: './images/food.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Declaring and Defining actions and effects
const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.filter-btn');

// event should load the values provided immediately
window.addEventListener('DOMContentLoaded', function () {
  // Calling the function that is dynamically displaying the content
  displayMenuItems(menu);
});

// Loop through each filter buttons
filterBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // targeting the dataset of the HTML so as to differentiate
    const category = e.currentTarget.dataset.id;
    // using the filter Array method to select and filter a particular menu
    const filterMenuItem = menu.filter(function (menuItems) {
      // checking to see if the menu category and the HTML dataset id are same
      if (menuItems.category === category) {
        return menuItems;
      }
    });
    // Checking to see if the HTML dataset id is same as 'all'
    if (category === 'all') {
      // render all the menu array
      displayMenuItems(menu);
    } else {
      // render the filtered menu array
      displayMenuItems(filterMenuItem);
    }
  });
});

function displayMenuItems(menuItems) {
  // Loop through the menu array to be able to assign value for each child
  let displayMenu = menuItems.map(function (item) {
    //   values meant to be returned after iteration
    return `<article class="menu-item">
          <img src=${item.img} alt="" class="img photo" />
          <div class="item-info">
            <header>
              <h3>${item.title}</h3>
              <span class="price">$${item.price}</span>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  //   join the dynamic content together to avoid comma in between
  displayMenu = displayMenu.join('');
  //   place the iterated values back in the parent dynamically
  sectionCenter.innerHTML = displayMenu;
}
