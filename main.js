// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Load existing user data from local storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Function to display user details in the list
function displayUser(user) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
  userList.appendChild(li);
}

// Display existing users on page load
users.forEach(displayUser);

function onSubmit(e) {
  e.preventDefault();

  // Get user input values
  const name = nameInput.value;
  const email = emailInput.value;

  if (name === '' || email === '') {
    // Display an error message
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create a user object
    const user = {
      name,
      email,
    };

    // Add the new user to the array
    users.push(user);

    // Store the updated user array back in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Display the user in the list
    displayUser(user);

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
