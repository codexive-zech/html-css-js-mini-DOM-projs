// Selecting, Declaring and Defining items that will have actions and effects
const groceryForm = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const editBtn = document.querySelector('.edit-btn');
const clearBtn = document.querySelector('.clear-btn');
// Edit Option
let editElement;
// used when you want to edit
let editFlag = false;
// TO get specific id in the list
let editID = '';

// Implementing the Submit form Event
groceryForm.addEventListener('submit', addGroceryItem);

// implementing the click event for the clear button
clearBtn.addEventListener('click', clearGroceryItem);

// ********** Functions *******************
// function for Adding item to the grocery list
function addGroceryItem(e) {
  // Preventing form default behavior of submitting to the server
  e.preventDefault();
  // getting the value of the input in the form
  const groceryValue = groceryInput.value;
  //   getting Id of each item via the time it was added
  const id = new Date().getTime().toString();
  //   Checking to see if as long an the groceryValue(groceryInput) is not empty and editFlag (mode) is false
  if (groceryValue !== '' && editFlag === false) {
    // creat a new html element tag of article
    const articleElement = document.createElement('article');
    // Add it class to it
    articleElement.classList.add('grocery-item');
    // creating the data-id attribute
    const attr = document.createAttribute('data-id');
    // Add the value of the id as the attribute value
    attr.value = id;
    // Set the attribute into the article element
    articleElement.setAttributeNode(attr);
    // Dynamically adding the article HTML
    articleElement.innerHTML = `<p class="title">${groceryValue}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    // Merging and appending dynamically created article element it parent Grocery List
    groceryList.appendChild(articleElement);
    // Adding the success alert
    displayAlert('Grocery Item Added Successfully', 'success');
    // Adding the class for displaying the created article element section by it's parent grocery container
    groceryContainer.classList.add('show-container');
    // Add To Local Storage
    addToLocalStorage(id, groceryValue);
    // Set Back To Default
    backToDefault();
    // Checking to see if as long an the groceryValue(groceryInput) is not empty and editFlag (mode) is true
  } else if (groceryValue !== '' && editFlag === true) {
    console.log('Editing Item');
  } else {
    //  invoking the display Alert fun when the submit event takes place
    displayAlert('Empty', 'danger');
  }
}

// the display Function for alert
function displayAlert(text, bgAction) {
  // dynamically displaying text in the HTML
  alert.textContent = text;
  // dynamically adding the class for the alert bgColor
  alert.classList.add(`alert-${bgAction}`);

  //   setting a timeout fun so that it can be gone after the specified duration
  setTimeout(
    function () {
      //   getting back an empty string into the HTML
      alert.textContent = '';
      // removing the dynamically added class for the alert bgColor
      alert.classList.remove(`alert-${bgAction}`);
    },
    //   setting the specific duration before it goes out
    2000
  );
}

// Calling the Set Back To Default function
function backToDefault() {
  // Remove the inputted value by user
  groceryInput.value = '';
  // work all 3 in later part
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'Submit';
}

function clearGroceryItem() {
  // Selecting each item
  const groceryItems = document.querySelectorAll('.grocery-item');
  // Checking to make sure that the length of the grocery item is greater than zero (0)
  if (groceryItems.length > 0) {
    // loop through the grocery list when it's bigger than zero
    groceryItems.forEach(function (item) {
      // remove each grocery item from it parent grocery list
      groceryList.removeChild(item);
    });
    // remove the entire list container which include the the items and the clear button
    groceryContainer.classList.remove('show-container');
    // dynamically display the alert
    displayAlert('Grocery Cleared Successfully', 'success');
    // set back to default
    backToDefault();
    // Local storage part
    // localStorage.removeItem('grocery-list');
  }
}

// **********Local Storage **********
function addToLocalStorage(id, groceryValue) {
  console.log('Added to Local storage');
}
