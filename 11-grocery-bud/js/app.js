// Selecting, Declaring and Defining items that will have actions and effects
const groceryForm = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryItem = document.querySelector('.grocery-item');
const editBtn = document.querySelector('.edit-btn');
// Edit Option
let editElement;
// used when you want to edit
let editFlag = false;
// TO get specific id in the list
let editID = '';

// Implementing the Submit form Event
groceryForm.addEventListener('submit', addGroceryItem);
// Functions
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
    console.log('Adding New Items');
    // Checking to see if as long an the groceryValue(groceryInput) is not empty and editFlag (mode) is true
  } else if (groceryValue !== '' && editFlag === true) {
    console.log('Editing Item');
  } else {
    console.log('empty');
  }
}
