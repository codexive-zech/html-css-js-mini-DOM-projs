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
// *** function for Adding item to the grocery list ***
function addGroceryItem(e) {
  // Preventing form default behavior of submitting to the server
  e.preventDefault();
  // getting the value of the input in the form
  const value = groceryInput.value;
  //   getting Id of each item via the time it was added
  const id = new Date().getTime().toString();
  //   Checking to see if as long an the value(groceryInput) is not empty and editFlag (mode) is false
  if (value !== '' && editFlag === false) {
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
    articleElement.innerHTML = `<p class="title">${value}</p>
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
    //Dynamically added HTML can only be targeted when we have access to them.
    const deleteBtn = articleElement.querySelector('.delete-btn');
    const editBtn = articleElement.querySelector('.edit-btn');

    // Adding a click event to delete grocery now that we can access it
    deleteBtn.addEventListener('click', deleteGrocery);
    // Adding a click event to edit grocery now that we can access it
    editBtn.addEventListener('click', editGrocery);
    // Merging and appending dynamically created article element it parent Grocery List
    groceryList.appendChild(articleElement);
    // Adding the success alert
    displayAlert('Grocery Item Added Successfully', 'success');
    // Adding the class for displaying the created article element section by it's parent grocery container
    groceryContainer.classList.add('show-container');
    // Add To Local Storage
    addToLocalStorage(id, value);
    // Set Back To Default
    backToDefault();
    // Checking to see if as long an the value(groceryInput) is not empty and editFlag (mode) is true
  } else if (value !== '' && editFlag === true) {
    // inserting the value of edit Element form the HTML to become the new value
    editElement.innerHTML = value;
    //  invoking the display Alert fun when the submit event takes place
    displayAlert('Grocery Value Edited', 'success');
    // Editing the value in the Local Storage as well
    editLocalStorage(editID, value);
    // Setting back every thing in the edit func to default
    backToDefault();
  } else {
    //  invoking the display Alert fun when the submit event takes place
    displayAlert('Empty', 'danger');
  }
}

// *** the display Function for alert ***
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

//*** Calling the Set Back To Default function ***
function backToDefault() {
  // Remove the inputted value by user
  groceryInput.value = '';
  // work all 2 in later part
  editFlag = false;
  editID = '';
  // Change back the text of the submit button
  submitBtn.textContent = 'Submit';
}

//*** Function to clear the entire Grocery Item ***
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
    displayAlert('Grocery List has been Cleared', 'danger');
    // set back to default
    backToDefault();
    // remove all the items from the local storage
    localStorage.removeItem('list');
  }
}

//*** function to delete each grocery item ***
function deleteGrocery(e) {
  // getting the parent-element(btn-container, grocery-item)*2 of the element clicked
  const groceryItem = e.currentTarget.parentElement.parentElement;
  // getting the id value of each element (item) dataset which was dynamically added to HTML
  const id = groceryItem.dataset.id;
  // removing the exact gotten child grocery-item form it's parent grocery-list
  groceryList.removeChild(groceryItem);
  // checking to see if the grocery-list children is exactly or more than zero (0)
  if (groceryList.children.length === 0) {
    // remove the entire container space for all item including clear button
    groceryContainer.classList.remove('show-container');
  }
  // set up an alert on every delete action
  displayAlert('Grocery Item Removed', 'danger');
  // reset all back to default
  backToDefault();
  // remove from Local storage
  removeFromLocalStorage(id);
}

//*** function to edit each grocery item ***
function editGrocery(e) {
  // getting the parent-element(btn-container, grocery-item)*2 of the element clicked
  const groceryItem = e.currentTarget.parentElement.parentElement;
  // Picking the previous sibling element that is beside the parent of the clicked button
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // inputting the value of the picked parent sibling into the HTML(assigning it into the form)
  groceryInput.value = editElement.innerHTML;
  // change the edit hand to True
  editFlag = true;
  // Change the button text
  submitBtn.textContent = 'Edit';
  editID = groceryItem.dataset.id;
}

// **********Local Storage **********
function addToLocalStorage(id, value) {
  // setting the key value pair into an object
  const grocery = { id, value };
  // getting item from local storage, checking to see if the items key is (list) in the local storage else make it an empty array, invoking the function
  let item = getFromLocalStorage();
  // Add the grocery {key, value} pair to the array Object in the local storage
  item.push(grocery);
  // setting the grocery items into the local storage as string
  localStorage.setItem('list', JSON.stringify(item));
}

function removeFromLocalStorage(id) {
  // getting item from local storage, checking to see if the items key is (list) in the local storage else make it an empty array
  let items = getFromLocalStorage();
  // looping over all the values in the local storage
  items = items.filter(function (item) {
    // checking to make sure that an item id is not the same as the clicked item id, then return that item back to the items array object
    if (item.id !== id) {
      // return only items that delete-btn were not clicked back to the local storage
      return item;
    }
  });
  // setting the grocery items into the local storage as string
  localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
  // getting item from local storage, checking to see if the items key is (list) in the local storage else make it an empty array
  let items = getFromLocalStorage();
  // looping over all the values in the local storage using map
  items = items.map(function (item) {
    // checking to see if the id clicked is same as the id in the local storage
    if (item.id === id) {
      // changing the value of the item in the local storage
      item.value = value;
    }
    // return back all the items
    return item;
  });
  // setting the grocery items into the local storage as string
  localStorage.setItem('list', JSON.stringify(items));
}

function getFromLocalStorage() {
  // getting item from local storage, checking to see if the items key is (list) in the local storage else make it an empty array
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
