// Selecting, Declaring and Defining items that will have actions and effects
const groceryForm = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryItem = document.querySelector('.grocery-item');
const editBtn = document.querySelector('.edit-btn');
// Edit Option
let editElement;
let editFlag = false;
let editID = '';
