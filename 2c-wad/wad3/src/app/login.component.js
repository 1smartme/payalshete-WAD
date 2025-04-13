// login.js

let displayemail = '';
let displaypassword = '';
let loggedIn = false;

function loginUser() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  displayemail = emailInput.value;
  displaypassword = passwordInput.value;

  if (displayemail === '' || displaypassword === '') {
    alert("Please fill in all fields.");
    return;
  }

  loggedIn = true;

  // Update UI
  document.getElementById('displayemail').textContent = displayemail;
  document.getElementById('displaypassword').textContent = displaypassword;
  document.getElementById('welcome').style.display = 'block';
  document.getElementById('user-output').style.display = 'block';
}

